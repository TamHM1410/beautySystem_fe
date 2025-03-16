import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Button, Group, Text } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import SelectQuery from '@/components/common/SelectQuery/SelectQuery';
import { useAuth } from '@/context/AuthContext';
import { BookingRequest } from '@/models/request.model';
import AppointmentService from '@/services/appointment.service';
import PaymentService from '@/services/payment.service';
import ServicesService from '@/services/services.service';
import { displayNumber, displayValue } from '@/utils/display';

interface BookingFormProps {
  serviceId: number;
}

const BookingForm = ({ serviceId }: BookingFormProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const { data: service, isFetching } = useQuery({
    queryKey: ['service', serviceId],
    queryFn: () => ServicesService.getServiceById(serviceId),
    enabled: !!serviceId,
    refetchOnWindowFocus: false,
  });

  const form = useForm({
    initialValues: {
      appointmentId: 0,
      startAt: new Date(),
      endAt: new Date(),
      // expertId: null,
    },
    validate: {
      startAt: (value, values) =>
        value > values.endAt ? 'Start time cannot be later than end time' : null,
      endAt: (value, values) =>
        value < values.startAt ? 'End time cannot be earlier than start time' : null,
      expertId: (value) => (!value ? 'Expert is required' : null),
    },
  });

  const getPayment = async (appointmentId: string) => {
    setLoading(true);
    const response = await PaymentService.createPayment(user?.id.toString() || '', appointmentId);
    setLoading(false);

    if (!response) {
      toast.error('Failed to create payment');
    } else {
      window.location.href = response.data || 'https://zalopay.vn';
      toast.success('Payment created successfully');
    }
  };

  const onBooking = async () => {
    const payload: BookingRequest = {
      usersDTO: {
        id: user?.id || 0,
      },
      appointmentsDTO: {
        appointmentId: 0,
        total: service?.data.price || 0,
        start_at: form.values.startAt.toISOString(),
        end_at: form.values.endAt.toISOString(),
      },
      expertsDTO: {
        expertId: form.values.expertId || 1,
      },
      servicesDTO: {
        serviceId,
      },
    };

    setLoading(true);
    const response = await AppointmentService.bookAppointment(payload);
    setLoading(false);
    if (!response) {
      toast.error('Failed to book appointment');
    } else {
      toast.success('Appointment booked successfully');
      getPayment(response.data?.data?.appointmentId.toString());
    }
  };

  const handleSubmit = () => {
    onBooking();
  };

  return (
    <>
      {!isFetching && (
        <>
          <Text size="sm" fw="bolder">
            Service Name
          </Text>
          <Text size="md" mb="xs">
            {displayValue(service?.data.serviceName)}
          </Text>

          <Text size="sm" fw="bolder">
            Total
          </Text>

          <Text size="md" mb="xs">
            {displayNumber(service?.data.price)} VND
          </Text>
        </>
      )}
      <form onSubmit={form.onSubmit(handleSubmit)} onReset={form.reset}>
        <DateTimePicker
          withAsterisk
          label="Start At"
          placeholder="Start At"
          minDate={new Date()}
          {...form.getInputProps('startAt')}
        />
        <DateTimePicker
          withAsterisk
          label="End At"
          placeholder="End At"
          minDate={form.values.startAt}
          {...form.getInputProps('endAt')}
        />
        <SelectQuery
          withAsterisk
          label="Expert"
          placeholder="Select Expert"
          {...form.getInputProps('expertId')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Group>
      </form>
    </>
  );
};

export default BookingForm;
