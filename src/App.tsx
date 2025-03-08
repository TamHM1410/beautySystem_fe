import '@mantine/core/styles.css';

import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './components/Header/Header';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
