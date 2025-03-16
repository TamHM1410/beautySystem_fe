import { useQuery } from '@tanstack/react-query';
import { Select, SelectProps } from '@mantine/core';
import ExpertService from '@/services/expert.service';

const SelectQuery = (props: SelectProps) => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['expert'],
    queryFn: () => ExpertService.getExperts(),
  });

  const selectQueryData = Array.isArray(data?.data)
    ? data?.data?.map((item: any) => ({
        value: item.expertId.toString() || '',
        label: item.fullName || '',
      }))
    : [];

  return (
    <Select
      {...props}
      data={selectQueryData}
      disabled={props.disabled || isFetching}
      loading={isLoading}
      placeholder={isLoading ? 'Loading experts...' : props.placeholder || 'Select an expert'}
    />
  );
};

export default SelectQuery;
