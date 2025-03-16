import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Loader } from '@mantine/core';
import App from './App';

const queryClientProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      retry: false,
      retryOnMount: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClientProvider}>
    <Suspense fallback={<Loader color="blue" />}>
      <App />
    </Suspense>
    <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
    <Toaster position="top-center" reverseOrder={false} />
  </QueryClientProvider>
);
