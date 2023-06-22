import { postRequest } from '.';

export const getCollections = async (payload) => {
  const endpoint = 'collection_list';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const addCollection = async (payload) => {
  const endpoint = 'create_collection';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const addItem = async (payload) => {
  const endpoint = 'add_collection_item';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const listCollectionItems = async (payload) => {
  const endpoint = 'collection_list_items';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};

export const deleteItem = async (payload) => {
  const endpoint = 'collection_list_item_remove';
  try {
    return await postRequest(endpoint, payload);
  } catch (err) {
    console.log(err);
  }
};
