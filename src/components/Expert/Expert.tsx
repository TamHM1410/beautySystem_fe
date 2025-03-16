import { useQuery } from '@tanstack/react-query';
import CarouselStyled from '../custom/StyledCarosel';

import '@mantine/carousel/styles.css';

import { http } from '@/utils/http';

export default function ExpertPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['expert'], // queryKey: ['workSchedule'],
    queryFn: async () => {
      const res = await http.get(`api/experts/findAll`);
      return res?.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log(data.data, 'data');
  return (
    <div>
      <CarouselStyled defaultValue={data.data} />
    </div>
  );
}
