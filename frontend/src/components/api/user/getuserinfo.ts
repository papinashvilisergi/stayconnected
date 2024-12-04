import { httpClient } from '..';

export const getUserInfo = async () => {
  try {
    const response = await httpClient.get('/user/profile/');
    console.log('fetched user data', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};
