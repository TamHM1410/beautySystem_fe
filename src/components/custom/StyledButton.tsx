import { Button ,ButtonProps} from '@mantine/core';

const StyledButton = ({ className, ...props }:ButtonProps) => {
  return <Button className={`${className}`} {...props}/>;
};

export default StyledButton;
