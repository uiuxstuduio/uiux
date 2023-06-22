import { postRequest } from '.';

export const getDownloads = async (payload) => {
  const endpoint = 'customer_dowload_theme_list';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const writeReview = async (payload) => {
  const endpoint = 'write_review';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};
