import { httpClient } from '..';

export const getTags = async () => {
  try {
    const response = await httpClient.get('/tags');
    // console.log('get tags was successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during get tags:', error);
    throw error;
  }
};
