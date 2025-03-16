import { IconCalendar, IconRefresh } from '@tabler/icons-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Loader,
  Paper,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { useAuth } from '@/context/AuthContext';
import AppointmentService from '@/services/appointment.service';
import { http } from '@/utils/http';

const updateStatus = async ({ payload, appointmentId }) => {
  debugger;
  const newStatus = payload?.status === 1 ? 2 : payload?.status;
  payload.status = newStatus;
  const res = await AppointmentService.updateAppointment(payload, appointmentId);
};

export default function WorkSchedule() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['workSchedule'],
    queryFn: async () => {
      const res = await http.get(`api/workSchedule/findByExpert?nameOrId=${user?.id}`);
      return res?.data;
    },
  });

  const mutation = useMutation({
    mutationFn: updateStatus,
    onSuccess: () => {
      toast.success('Success');
      queryClient.invalidateQueries(['appointments'] as any);
    },
  });

  if (isLoading) {
    return (
      <Center style={{ height: '60vh' }}>
        <Loader size="lg" variant="dots" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center style={{ height: '60vh' }}>
        <Box>
          <Text color="red" weight={500} size="lg">
            Error loading appointments
          </Text>
          <Button
            mt="md"
            leftIcon={<IconRefresh size={16} />}
            onClick={() => queryClient.invalidateQueries(['workSchedule'] as any)}
          >
            Thử lại
          </Button>
        </Box>
      </Center>
    );
  }

  const getStatusBadge = (status) => {
    if (status === 1) {
      return <Badge color="yellow">Pending</Badge>;
    } else {
      return <Badge color="green">Complete</Badge>;
    }
  };

  return (
    <Container size="xl" px="md">
      <Paper shadow="xs" p="md" withBorder mb="xl">
        <Group position="apart" mb="md">
          <Group>
            <IconCalendar size={24} />
            <Title order={2}>Work schedule </Title>
          </Group>
          <Text color="dimmed" size="sm">
            {data?.data?.length || 0} Work schedule found
          </Text>
        </Group>
        <Divider mb="md" />

        <Box style={{ overflowX: 'auto' }}>
          <Table striped highlightOnHover verticalSpacing="md">
            <thead>
              <tr>
                <th>ID</th>
                <th>Service ID</th>
                <th>Total</th>
                <th>Work Date</th>
                <th>Start At</th>
                <th>End At</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((appointment) => (
                <tr key={appointment.appointmentId}>
                  <td>
                    <Text weight={500}>#{appointment.appointmentId}</Text>
                  </td>
                  {/* <td>{appointment.usersId}</td>
                  <td>{appointment.expertsId}</td> */}
                  <td>{appointment.servicesId}</td>
                  <td>
                    <Text weight={500}>{appointment.total.toLocaleString()} ₫</Text>
                  </td>
                  <td>
                    <Text size="sm">{appointment.work_date}</Text>
                  </td>
                  <td>
                    <Text size="sm">{`${appointment.start_at.hour}:${appointment.start_at.minute}`}</Text>
                  </td>
                  <td>
                    <Text size="sm">{`${appointment.end_at.hour}:${appointment.end_at.minute}`}</Text>
                  </td>
                  <td>{getStatusBadge(appointment.status)}</td>
                  <td>
                    <Button
                      variant="light"
                      color={appointment.status === 1 ? 'blue' : 'gray'}
                      size="xs"
                      onClick={() =>
                        mutation.mutate({
                          payload: appointment,
                          appointmentId: appointment.appointmentId,
                        })
                      }
                      disabled={appointment.status !== 1}
                    >
                      Confirm service completion
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>

        {(!data?.data || data.data.length === 0) && (
          <Center p="xl">
            <Text color="dimmed">Không có lịch hẹn nào</Text>
          </Center>
        )}
      </Paper>
    </Container>
  );
}
