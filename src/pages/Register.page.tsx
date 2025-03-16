import { useSignal, useSignals } from '@preact/signals-react/runtime';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Anchor, Button, Checkbox, Paper, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import StyledInputPassword from '@/components/custom/StyledInputPassword';
import StyledTextInput from '@/components/custom/StyledInputText';
import AuthService from '@/services/auth.service';
import classes from '@/styles/auth.module.css';

const RegisterPage = () => {
  useSignals();
  const navigate = useNavigate();
  const loading = useSignal<boolean>(false);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      username: '',
      password: '',
    },
    validate: {
      email: (val) => (val.includes('@') ? null : 'Invalid email address'),
      name: (val) => (val.length < 1 ? 'Name should include at least 1 characters' : null),
      phone: (val) => (val.length < 1 ? 'Phone should include at least 1 characters' : null),
      username: (val) => (val.length < 1 ? 'Username should include at least 1 characters' : null),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleRegister = async (values: typeof form.values) => {
    loading.value = true;
    const response = await AuthService.register({
      email: values.email,
      name: values.name,
      password: values.phone,
      username: values.username,
      phone: values.phone,
    });
    loading.value = false;
    if (!response) {
      return toast.error('Register failed');
    }
    toast.success('Register successfully');
    navigate('/auth/login');
  };

  const handleSubmit = (values: typeof form.values) => {
    handleRegister(values);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to beauty system!
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)} onReset={form.reset}>
          <StyledTextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            required
            {...form.getInputProps('email')}
          />
          <StyledTextInput
            label="Your full name"
            placeholder="Johnny Shin"
            size="md"
            required
            {...form.getInputProps('name')}
          />
          <StyledTextInput
            label="Your phone"
            placeholder="082XXXXXX"
            size="md"
            required
            {...form.getInputProps('phone')}
          />

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
            Register
          </Button>
        </form>

        <Text ta="center" mt="md">
          Already have an account ?
          <Anchor<'a'> href="/auth/login" fw={700}>
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default RegisterPage;
