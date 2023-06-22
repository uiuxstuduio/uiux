import axios from 'axios';
import constants from '../constants';
const { baseUrl } = constants;
const TOKEN_CONFIG = {
  // withCredentials: true
};
const FORM_DATA = {
  headers: {
    'Content-type': 'multipart/form-data',
    // 'Authorization': `Bearer ${token}`
  }
};

// Handling GET request
const getRequest = async (path) => {
  const API_ENDPOINT = `${baseUrl}/${path}`;
  return await axios.get(API_ENDPOINT, TOKEN_CONFIG);
};

const getReqWithoutToken = async (path) => {
  const API_ENDPOINT = `${baseUrl}/${path}`;
  return await axios.get(API_ENDPOINT);
};

// Handling POST request
const postRequest = async (path, payload) => {
  const API_ENDPOINT = `${baseUrl}/${path}`;
  return await axios.post(API_ENDPOINT, payload, FORM_DATA);
};
export { getRequest, getReqWithoutToken, postRequest };
