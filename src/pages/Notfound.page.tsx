import { Button, Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import classes from '@/styles/notfound.module.css';

export function NotFoundPage() {
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src="https://bizmac.com/Images/Editor/images/404-not-found-la-gi.jpg"
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            Get back to home page
          </Button>
        </div>
        <Image
          src="https://bizmac.com/Images/Editor/images/404-not-found-la-gi.jpg"
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
}
