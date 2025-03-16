import { useSignal, useSignals } from '@preact/signals-react/runtime';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Anchor, Button, Checkbox, Paper, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import StyledInputPassword from '@/components/custom/StyledInputPassword';
import StyledTextInput from '@/components/custom/StyledInputText';
import { useAuth } from '@/context/AuthContext';
import AuthService from '@/services/auth.service';
import classes from '@/styles/auth.module.css';

const LoginPage = () => {
  useSignals();
  const { setUser } = useAuth();
  const loading = useSignal<boolean>(false);
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (val) => (val.length < 1 ? 'Username should include at least 1 characters' : null),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleLogin = async (values: typeof form.values) => {
    loading.value = true;
    const response = await AuthService.login({
      username: values.username,
      password: values.password,
    });
    loading.value = false;
    if (!response) {
      return toast.error('Invalid username or password');
    }
    localStorage.setItem('user', JSON.stringify(response));
    setUser(response);
    toast.success('Login successfully');
    window.location.href = '/';
  };

  const handleSubmit = (values: typeof form.values) => {
    handleLogin(values);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to beauty system!
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)} onReset={form.reset}>
          <StyledTextInput
            label="Username"
            placeholder="Your username"
            size="md"
            required
            {...form.getInputProps('username')}
          />

          <StyledInputPassword
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            required
            {...form.getInputProps('password')}
          />

          <Checkbox label="Keep me logged in" mt="xl" size="md" />

          <Button fullWidth mt="md" size="md" type="submit" loading={loading.value}>
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don't have an account?{' '}
          <Anchor<'a'> href="/auth/register" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default LoginPage;
