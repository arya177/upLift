import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; 

export const fetchServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const fetchAvailableRequests = async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getRequests`, {
        params: {
          email: email
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching available requests:', error);
      throw error;
    }
};

export const registerUser = async (userData) => {
    try {
      await axios.post(`${API_BASE_URL}/register`, userData);
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
};

export const getUserInfo = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getUser`, {
      params: { email }, 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};