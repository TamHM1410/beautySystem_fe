import { Box, Button, Collapse, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const StyledCollapse = ({ children, ...other }: any) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={other?.className || 400} mx="auto" className={other?.className}>
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>{other.title}</Button>
      </Group>

      <Collapse in={opened}>{children}</Collapse>
    </Box>
  );
};

export default StyledCollapse;
