export const ProfileValidation = (payload) => {
  const ProfileError = {
    user_login: null,
    billing_country: null
  };
  if (!payload.user_login) ProfileError.user_login = 'Name is required.';
  else if (!/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(payload.user_login))
    ProfileError.user_login = 'Invalid name format.';

  if (!payload.billing_country.trim()) ProfileError.billing_country = 'Country is required.';
  if (/\d/.test(payload.billing_country)) ProfileError.billing_country = 'Invalid country name.';
  return ProfileError;
};

export const SettingsValidation = (payload) => {
  const SettingsError = {
    user_email: null,
    billing_phone: null
  };
  if (!payload.user_email?.trim()) SettingsError.user_email = 'Email is required';
  else if (!/^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.user_email))
    SettingsError.user_email = 'Invalid email format.';

  if (!payload.billing_phone?.trim()) SettingsError.billing_phone = 'Phone number is required.';
  else if (!/[\d]+/.test(payload.billing_phone))
    SettingsError.billing_phone = 'Invalid Phone number.';
  else if (payload.billing_phone.length > 10)
    SettingsError.billing_phone = 'Maximum 10 digits allowed';
  return SettingsError;
};
