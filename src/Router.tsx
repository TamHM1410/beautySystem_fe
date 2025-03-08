import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import { NotFoundPage } from './components/Notfound/Notfound';
import AuthPage from './pages/Auth.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // AppLayout là route cha
    children: [
      { index: true, element: <HomePage /> }, // Trang chủ
      { path: '*', element: <NotFoundPage /> }, // Trang 404
    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
