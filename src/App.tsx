import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './config/theme';
import { AuthProvider } from './context/AuthContext';
import { Router } from './Router';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </MantineProvider>
  );
}
