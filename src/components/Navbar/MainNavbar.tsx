import { useSignal, useSignals } from '@preact/signals-react/runtime';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './styles/style.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', link: '/' },
  { icon: IconGauge, label: 'Dashboard', link: '/dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Schedule', link: '/dashboard/schedule' },
  { icon: IconUser, label: 'Account', link: '/dashboard/account' },
  { icon: IconSettings, label: 'Settings',link: '/dashboard'  },
];

export default function MainNavBar() {
  useSignals();
  const active = useSignal(1);
  const navigate = useNavigate();

  const links = mockdata.map((link: any, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active.value}
      onClick={() => {
        active.value = index;
        navigate(link.link);
      }}
    />
  ));

  return (
    <>
      <nav className={classes.navbar} style={{ height: '100vh' }}>
        <Center>
          <MantineLogo type="mark" size={30} />
        </Center>

        <div className={classes.navbarMain}>
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <Stack justify="center" gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </nav>
    </>
  );
}
