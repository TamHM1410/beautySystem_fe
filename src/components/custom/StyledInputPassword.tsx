import { PasswordInput, PasswordInputProps } from '@mantine/core';

const StyledInputPassword = ({ className, ...props }: PasswordInputProps) => {
  return <PasswordInput className={className} {...props} />;
};

export default StyledInputPassword;
