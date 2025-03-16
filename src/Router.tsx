import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import AuthLayout from './components/Layout/AuthLayout';
import DashboardLayout from './components/Layout/DashboardLayout';
import Profile from './components/Profile/Profile';
import WorkSchedule from './components/WorkSchedule/WorkSchedule';
import { HomePage } from './pages/Home.page';
import LoginPage from './pages/Login.page';
import { NotFoundPage } from './pages/Notfound.page';
import RegisterPage from './pages/Register.page';
import SchedulePage from './pages/Schedule.page';
import SuccessPage from './pages/Success.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // AppLayout là route cha
    children: [
      { index: true, element: <HomePage /> }, // Trang chủ
      { path: '*', element: <NotFoundPage /> }, // Trang 404
      { path: '/success', element: <SuccessPage /> }, // Trang thành công
      // {
      //   path: 'profile',
      //   element: <Profile />, // Trang đăng ký
      // },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />, // AuthLayout là route cha
    children: [
      {
        path: 'login',
        element: <LoginPage />, // Trang đăng nhập
      },
      {
        path: 'register',
        element: <RegisterPage />, // Trang đăng ký
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />, // AuthLayout là route cha
    children: [
      {
        path: 'account',
        element: <Profile />, // Trang đăng nhập
      },
      { index: true, element: <SchedulePage /> }, // Trang thành công
      { path: 'schedule', element: <WorkSchedule /> }, // Trang thành công
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
