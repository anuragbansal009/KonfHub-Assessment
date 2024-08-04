import axios from 'axios';

const API_URL = 'https://dev-api.konfhub.com';

export const getEventData = async () => {
  try {
    const response = await axios.get(`${API_URL}/event/public/konfhub-frontend-evaluation-task`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event data:', error);
    throw error;
  }
};

export const getSpeakerData = async () => {
  try {
    const response = await axios.get(`${API_URL}/event/public/konfhub-frontend-evaluation-task/speakers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching speaker data:', error);
    throw error;
  }
}

export const getWorkshopData = async () => {
  try {
    const response = await axios.get(`${API_URL}/event/public/konfhub-frontend-evaluation-task/workshops`);
    return response.data;
  } catch (error) {
    console.error('Error fetching speaker data:', error);
    throw error;
  }
}