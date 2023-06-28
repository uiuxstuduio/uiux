import { getRequest, postRequest } from '.';
export const getHomePageContent = async () => {
  const endpoint = 'home_page_thmem_list';
  try {
    return await getRequest(endpoint);
  } catch (error) {
    console.log(error);
  }
};

export const themeDetails = async (id) => {
  const endpoint = 'theme_detaile';
  const payload = {
    theme_id: id
  };
  try {
    return await postRequest(endpoint, payload);
  } catch (error) {
    console.log(error);
  }
};

export const newHomePage = async () => {
  const endpoint = 'new_home_page';
  try {
    return await getRequest(endpoint);
  } catch (error) {
    console.log(error);
  }
};
export const getMenudata = async () => {
  const endpoint = 'categories';
  try {
    return await postRequest(endpoint);
  } catch (error) {
    console.log(error);
  }
};
