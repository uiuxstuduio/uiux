export const LoginValidation = (payload) => {
  const LoginInitialError = {
    email: null,
    password: null
  };
  if (!payload.email) LoginInitialError.email = 'Email is required.';
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.email))
    LoginInitialError.email = 'Invalid email format.';

  if (!payload.password) LoginInitialError.password = 'Password is required.';
  else if (payload.password.length < 6)
    LoginInitialError.password = 'Password must be atleast 6 characters long.';

  return LoginInitialError;
};
