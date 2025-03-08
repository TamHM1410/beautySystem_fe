import { Select, SelectProps } from '@mantine/core';

const StyledInputSelect = ({ className, ...props }: SelectProps) => {
  return <Select className={className} {...props} />;
};

export default StyledInputSelect;
