import React from 'react';
import { IconArrowRight, IconCheck, IconDownload } from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  createStyles,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

// You would need to install these packages:
// npm install @mantine/core @mantine/hooks @tabler/icons-react

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 600,
    margin: '40px auto',
  },
  successIcon: {
    backgroundColor: theme.colors.green[6],
    color: theme.white,
    borderRadius: '50%',
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  paymentDetails: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.gray[0],
  },
  detailsRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.xs}px 0`,
  },
  receiptButton: {
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    color: theme.black,
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

const PaymentSuccessForm = () => {
  const { classes } = useStyles();

  // This would typically come from your payment processing API
  const paymentData = {
    orderId: 'ORD-20250313-7842',
    amount: '$129.99',
    date: 'March 13, 2025',
    paymentMethod: 'Visa •••• 4242',
    email: 'customer@example.com',
  };

  return (
    <Container className={classes.container}>
      <Paper shadow="md" p="xl" radius="md">
        <Stack align="center" spacing="md" mb="xl">
          <ThemeIcon size={80} radius={40} className={classes.successIcon}>
            <IconCheck size={40} stroke={2.5} />
          </ThemeIcon>
          <Title order={2} align="center">
            Payment Successful
          </Title>
          <Text color="dimmed" align="center">
            Your payment has been processed successfully. A confirmation email has been sent to{' '}
            {paymentData.email}.
          </Text>
        </Stack>

        <Divider my="lg" label="Payment Details" labelPosition="center" />

        <Box className={classes.paymentDetails} mb="lg">
          <Grid className={classes.detailsRow}>
            <Grid.Col span={6}>
              <Text weight={500}>Order ID</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text align="right">{paymentData.orderId}</Text>
            </Grid.Col>
          </Grid>
          <Grid className={classes.detailsRow}>
            <Grid.Col span={6}>
              <Text weight={500}>Amount Paid</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text align="right">{paymentData.amount}</Text>
            </Grid.Col>
          </Grid>
          <Grid className={classes.detailsRow}>
            <Grid.Col span={6}>
              <Text weight={500}>Date</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text align="right">{paymentData.date}</Text>
            </Grid.Col>
          </Grid>
          <Grid className={classes.detailsRow}>
            <Grid.Col span={6}>
              <Text weight={500}>Payment Method</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text align="right">{paymentData.paymentMethod}</Text>
            </Grid.Col>
          </Grid>
        </Box>

        <Group position="apart" mt="xl">
          <Button
            variant="outline"
            leftIcon={<IconDownload size={16} />}
            className={classes.receiptButton}
          >
            Download Receipt
          </Button>
          <Button rightIcon={<IconArrowRight size={16} />}>Continue Shopping</Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default PaymentSuccessForm;
