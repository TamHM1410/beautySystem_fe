import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const AuthLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    return navigate('/');
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
