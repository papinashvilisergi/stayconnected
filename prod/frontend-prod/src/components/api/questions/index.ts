import { httpClient } from '..';

export const getQuestions = async (search: string) => {
  try {
    const endpoint = `/questions${search}`;
    const response = await httpClient.get(endpoint);
    console.log('get questions was successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during get questions:', error);
    throw error;
  }
};
