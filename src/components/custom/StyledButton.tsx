import { Button, ButtonProps } from '@mantine/core';

type StyledButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & ButtonProps;

const StyledButton = ({ className, type, ...props }: StyledButtonProps) => {
  return <Button className={`${className}`} type={type} {...props} />;
};

export default StyledButton;
