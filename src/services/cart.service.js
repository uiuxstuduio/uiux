import { postRequest } from '.';
export const getCartItems = async (payload) => {
  const endpoint = 'cart_page';
  try {
    return await postRequest(endpoint, payload);
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (payload) => {
  const endpoint = 'add_to_cart_item';
  try {
    return await postRequest(endpoint, payload);
  } catch (error) {
    console.log(error);
  }
};
