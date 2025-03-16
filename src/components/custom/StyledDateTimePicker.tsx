import { DateTimePicker, DateTimePickerProps } from '@mantine/dates';

const StyledDateTimePicker = ({ className, ...props }: DateTimePickerProps) => {
  return <DateTimePicker className={className} {...props} />;
};
export default StyledDateTimePicker;
