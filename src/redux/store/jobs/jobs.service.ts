import axios from 'axios';
const API_URL = process.env.REACT_APP_NX_BACKEND_URL;

const createJob = async (input: any) => {
  const response = await axios.post(`${API_URL}/jobs/create`, input);
  return response.data;
};

const getAllJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs/all-jobs`);
  return response.data;
};

export const jobsService = {
  createJob,
  getAllJobs,
};
