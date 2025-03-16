import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { displayNumber } from '@/utils/display';

interface FeatureCardProps {
  imageUrl?: string;
  serviceName: string;
  description: string;
  price: number;
  duration: number;
  type: string;
  skinType?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  imageUrl,
  serviceName,
  description,
  price,
  duration,
  type,
  onClick,
}: FeatureCardProps) => {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src={
              imageUrl ||
              'https://plus.unsplash.com/premium_photo-1661404164814-9d3c137097aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{serviceName}</Text>
          <Badge color="pink">{type}</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {description}
        </Text>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{`${displayNumber(price)} VND`}</Text>
          <Badge color="pink">{`${displayNumber(duration)} minutes`}</Badge>
        </Group>

        <Button color="blue" fullWidth mt="md" radius="md" onClick={onClick}>
          Book now
        </Button>
      </Card>
    </>
  );
};

export default FeatureCard;
