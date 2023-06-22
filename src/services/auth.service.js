import { postRequest } from '.';

export const signUp = async (payload) => {
  const endpoint = 'users/sign_up';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (payload) => {
  const endpoint = 'sign_in';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};
