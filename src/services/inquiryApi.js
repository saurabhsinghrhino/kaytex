import axios from 'axios';

// Get API URL from environment variables, fallback to local development port
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * Submits the inquiry form to the backend API.
 * 
 * @param {Object} data - The inquiry form data { name, phone, email, query }
 * @returns {Promise<Object>} The API response
 */
export const submitInquiry = async (data) => {
  const response = await api.post('/api/inquiry', data);
  return response.data;
};
