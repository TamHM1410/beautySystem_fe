import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import DashboardLayout from './components/Layout/DashboardLayout';
import MainNavBar from './components/Navbar/MainNavbar';
import { NotFoundPage } from './components/Notfound/Notfound';
import AuthPage from './pages/Auth.page';
import { HomePage } from './pages/Home.page';
import AccountSetting from './components/Account/Account';
import SkinTest from './components/Skintest/Skintest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // AppLayout là route cha
    children: [
      { index: true, element: <HomePage /> }, // Trang chủ
      { path: '*', element: <NotFoundPage /> }, // Trang 404
      { path: '/skintest', element: <SkinTest /> }, // Trang 404

    ],
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'notfound', element: <NotFoundPage /> },
      { path: 'account', element: <AccountSetting /> },

    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
