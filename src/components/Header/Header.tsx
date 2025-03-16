import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Avatar,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useAuth } from '@/context/AuthContext';
import classes from './styles/styles.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

export function HeaderMegaMenu() {
  const { user, logout } = useAuth();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Home
            </Link>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link to="/features" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor component={Link} to="/features" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/learn" className={classes.link}>
              Test your skin
            </Link>
            <Link to="/schedule" className={classes.link}>
              Schedule
            </Link>
          </Group>

          <Group visibleFrom="sm">
            {user ? (
              <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <Avatar />
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group align="flex-start" px="md">
                    <Text fw={500}>{user.username}</Text>
                  </Group>
                  <Divider my="sm" />{' '}
                  <Link to="/dashboard" className={classes.link}>
                    Dashboard
                  </Link>
                  <Button
                    variant="transparent"
                    fullWidth
                    p="xs"
                    className={classes.link}
                    onClick={logout}
                  >
                    Log out
                  </Button>
                </HoverCard.Dropdown>
              </HoverCard>
            ) : (
              <Link to="/auth/login" className={classes.link}>
                Log in
              </Link>
            )}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          <Link to="/" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="/learn" className={classes.link}>
            Learn
          </Link>
          <Link to="/academy" className={classes.link}>
            Academy
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {user ? (
              <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <Avatar />
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group align="flex-start" px="md">
                    <Text fw={500}>{user.username}</Text>
                  </Group>
                  <Divider my="sm" />
                  <Link to="/dashboard" className={classes.link}>
                    Dashboard
                  </Link>

                  <Button
                    variant="transparent"
                    fullWidth
                    p="xs"
                    className={classes.link}
                    onClick={logout}
                  >
                    Log out
                    <Link to="/dashboard" className={classes.link}>
                      Dashboard
                    </Link>
                  </Button>
                </HoverCard.Dropdown>
              </HoverCard>
            ) : (
              <Link to="/auth/login" className={classes.link}>
                Log in
              </Link>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
