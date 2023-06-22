export const SignupValidation = (payload) => {
  const SignupInitialError = {
    username: null,
    email: null,
    password: null
  };
  if (!payload.username) SignupInitialError.username = 'Username is required.';

  if (!payload.email) SignupInitialError.email = 'Email is required.';
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.email))
    SignupInitialError.email = 'Invalid email format.';

  if (!payload.password) SignupInitialError.password = 'Password is required.';
  else if (payload.password.length < 6)
    SignupInitialError.password = 'Password must be atleast 6 characters long.';

  return SignupInitialError;
};
