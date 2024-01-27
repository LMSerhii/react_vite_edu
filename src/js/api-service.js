import axios from 'axios';

export const getData = async topic => {
  axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};
