import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Grid, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ResponsiveModal from '@/components/common/ResponsiveModal/ResponsiveModal';
import { useAuth } from '@/context/AuthContext';
import { Service } from '@/models/service.model';
import ServicesService from '@/services/services.service';
import { http } from '@/utils/http';
import BookingForm from '../BookingForm/BookingForm';
import FeatureCard from './FeatureCard';
import styles from './styles/style.module.css';

const FeatureService = () => {
  const { user } = useAuth();
  const [id, setId] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  const getData = async () => {
    const response = await http.get('/api/services/getAll');
    return response?.data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ['servicesList'],
    queryFn: async () => {
      const res = await ServicesService.getServices();
      console.log(res, 'res');
      return res;
    },
  });

  const onClickBooking = (id: number) => {
    setId(id);
    open();
  };

  return (
    <div>
      {isFetching && (
        <LoadingOverlay
          visible={isFetching}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'blue', type: 'bars' }}
        />
      )}
      <div className={styles.container}>
        <h3 className={styles.title}>Featured Services</h3>
        <div className={styles.subtitle}>Explore professional skin care services</div>
      </div>
      <div className={styles.gridContainer}>
        <Grid>
          {data?.data.map((service: Service) => (
            <Grid.Col key={service.serviceId} span={6}>
              <FeatureCard
                serviceName={service.serviceName}
                description={service.description}
                price={service.price}
                type={service.type}
                skinType={service.skinType}
                duration={service.duration}
                onClick={() => {
                  if (user) {
                    onClickBooking(service.serviceId);
                  } else {
                    toast.error('Please login to book this service');
                  }
                }}
              />
            </Grid.Col>
          ))}
        </Grid>
      </div>
      <ResponsiveModal title="Booking Form" opened={opened} close={close}>
        <BookingForm serviceId={id} />
      </ResponsiveModal>
    </div>
  );
};

export default FeatureService;
