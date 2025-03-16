import { IconCircleCheck } from '@tabler/icons-react';
import { Box, Button, Container, Text, Title } from '@mantine/core';

const SuccessPage = () => {
  return (
    <Container size="sm">
      <Box mt="xl" px="xl" style={{ textAlign: 'center' }}>
        <IconCircleCheck size="100" color="green" />
        <Title order={2} mb="md">
          Success
        </Title>
        <Text size="md" mb="md">
          Your request has been successfully submitted.
        </Text>
        <Button variant="filled" color="blue" component="a" href="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessPage;
