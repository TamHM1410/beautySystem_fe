import { Carousel } from '@mantine/carousel';
import { Card, Image, Text } from '@mantine/core';

export default function CarouselStyled(defaultValue: any) {
  console.log(defaultValue.defaultValue, 'data sds');
  return (
    <>
      <div style={{ textAlign: 'center', paddingTop: 20, fontWeight: 700, fontSize: 24 }}>
        Elite team of specialists
      </div>
      <Carousel
        withIndicators
        height="auto"
        style={{ maxWidth: 800, margin: 'auto', paddingTop: 20 }}
      >
        {defaultValue.defaultValue.map((item: any) => (
          <Carousel.Slide>
            <Card shadow="sm" padding="xl" component="a" target="_blank">
              <Card.Section
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 150,
                }}
              >
                <Image
                  src={item.imageBase64}
                  alt="No way!"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                {item.name}
              </Text>
              <Text fw={500} size="lg" mt="md">
                {item.specialization}
              </Text>

              <Text fw={500} size="lg" mt="md">
                {item.yearOfExperiences}
              </Text>

              <Text fw={500} size="lg" mt="md">
                {item.description}
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                Please click anywhere on this card to claim your reward, this is not a fraud, trust
                us
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}
