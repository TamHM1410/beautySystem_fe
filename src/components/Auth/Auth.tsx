import { useSignal, useSignals } from '@preact/signals-react/runtime';
import { Anchor, Checkbox, Paper, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import StyledButton from '../custom/StyledButton';
import StyledInputPassword from '../custom/StyledInputPassword';
import StyledTextInput from '../custom/StyledInputText';
import classes from './styles/styles.module.css';

export default function AuthenticationImage() {
  useSignals();
  const type = useSignal<string>('login');

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values, 'payload');
  };
  console.log(type.value,'type')


  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to beauty system!
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          {type.value === 'register' && (
            <>
              <StyledTextInput
                label="Email address"
                placeholder="hello@gmail.com"
                size="md"
                required
                {...form.getInputProps('email')}
              />
              <StyledTextInput
                label="Your full name"
                placeholder="Johny Shin"
                size="md"
                required
                {...form.getInputProps('name')}
              />
              <StyledTextInput label="Your phone" placeholder="082XXXXXX" size="md" required />
            </>
          )}
          {/* Sửa field User name thành Email */}
          <StyledTextInput
            label="Username"
            placeholder="Your username"
            size="md"
            required
            {...form.getInputProps('username')} // Sửa từ 'name' thành 'email'
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

          <StyledButton fullWidth mt="xl" size="md" type="submit">
            Login
          </StyledButton>
        </form>

        {type.value === 'login' && (
          <Text ta="center" mt="md">
            Don't have an account?{' '}
            <Anchor<'a'>
              href="#"
              fw={700}
              onClick={(event) => {
                event.preventDefault();
                type.value = 'register';
              }}
            >
              Register
            </Anchor>
          </Text>
        )}
        {type.value === 'register' && (
          <Text ta="center" mt="md">
            Have account ?
            <Anchor<'a'>
              href="#"
              fw={700}
              onClick={(event) => {
                event.preventDefault();
                type.value = 'login';
              }}
            >
              Login
            </Anchor>
          </Text>
        )}
      </Paper>
    </div>
  );
}
