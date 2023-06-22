import { postRequest } from '.';

// Profile Page
export const getProfileData = async (payload) => {
  const endpoint = 'get_profile';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const updateProfileData = async (payload) => {
  const endpoint = 'update_profile';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};
// Settings Page
export const getSettings = async (payload) => {
  const endpoint = 'user_setting';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const updateSettings = async (payload) => {
  const endpoint = 'update_setting';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = async (payload) => {
  const endpoint = 'update_password';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};
