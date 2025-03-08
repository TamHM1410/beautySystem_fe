import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const FeatureCard =()=>{
    return <>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661404164814-9d3c137097aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>All Your Facial Treatments</Text>
        <Badge color="pink">All of skincare for yo face</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>100.000 vnd</Text>
        <Badge color="pink">60 minutes</Badge>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book now
      </Button>
    </Card>
    
    </>
}

export default FeatureCard