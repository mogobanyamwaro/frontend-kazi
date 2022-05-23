import axios from 'axios';
import { E164Number } from 'libphonenumber-js';
import {
  getAuthConfig,
  getAuthFileConfig,
} from '../../../helpers/getauthConfig';
const API_URL = process.env.REACT_APP_NX_BACKEND_URL;
export interface IProfileInput {
  firstName: string;
  country: string;
  lastName: string;
  city: string;
  about: string;
  username: string;
  phone: E164Number;
  avatar: string;
}

export interface skillsInput {
  Others?: string;
  Hospitality?: string;
  SalesAndMarketing?: string;
  OfficeWorks?: string;
  OnlineWork?: string;
  Accounts?: string;
  Procurements?: string;
  IT?: string;
  Engineering?: string;
  Health?: string;
  Education?: string;
  Experience?: {
    OthersExperience?: string;
    HospitalityExperience?: string;
    SalesAndMarketingExperience?: string;
    OfficeWorksExperience?: string;
    OnlineWorkExperience?: string;
    AccountsExperience?: string;
    ProcurementsExperience?: string;
    ITExperience?: string;
    EngineeringExperience?: string;
    HealthExperience?: string;
    EducationExperience?: string;
  };
}

const getCurrentUser = async () => {
  const config = getAuthConfig();
  const res = await axios.get(`${API_URL}/users/me`, config);
  return res.data;
};

const getMySkills = async () => {
  const config = getAuthConfig();
  const response = await axios.get(`${API_URL}/skills/my-skills`, config);
  return response.data;
};

//update profile

const updateProfile = async (input: IProfileInput) => {
  const config = getAuthConfig();
  const response = await axios.put(
    `${API_URL}/users/update-profile`,
    {
      ...input,
    },
    config
  );
  if (response) {
    return response.data;
  }
};

const getEmployees = async () => {
  const config = getAuthConfig();
  const response = await axios.get(`${API_URL}/users/all-employees`, config);
  if (response) {
    return response.data;
  }
};

const uploadFile = async (images: any) => {
  const config = getAuthFileConfig();
  const response = await axios.post(`${API_URL}/uploads/file`, images, config);
  if (response) {
    return response.data;
  }
};

const createSkills = async (skills: any) => {
  const config = getAuthConfig();
  console.log(skills);
  const response = await axios.post(
    `${API_URL}/skills/create`,
    {
      others: skills.Others,
      Hospitality: skills.Hospitality,
      SalesAndMarketing: skills.SalesAndMarketing,
      OfficeWorks: skills.OfficeWorks,
      OnlineWork: skills.OnlineWork,
      Accounts: skills.Accounts,
      Procurements: skills.Procurements,
      IT: skills.IT,
      Engineering: skills.Engineering,
      Health: skills.Health,
      Education: skills.Education,
      Experience: {
        OthersExperience: skills.Experience.OthersExperience,
        HospitalityExperience: skills.Experience.HospitalityExperience,
        SalesAndMarketingExperience:
          skills.Experience.SalesAndMarketingExperience,
        OfficeWorksExperience: skills.Experience.OfficeWorksExperience,
        OnlineWorkExperience: skills.Experience.OnlineWorkExperience,
        AccountsExperience: skills.Experience.AccountsExperience,
        ProcurementsExperience: skills.Experience.ProcurementsExperience,
        ITExperience: skills.Experience.ITExperience,
        EngineeringExperience: skills.Experience.EngineeringExperience,
        HealthExperience: skills.Experience.HealthExperience,
        EducationExperience: skills.Experience.EducationExperience,
      },
    },
    config
  );
  if (response) {
    return response.data;
  }
};

const UserService = {
  getCurrentUser,
  updateProfile,
  createSkills,
  getMySkills,
  getEmployees,
  uploadFile,
};
export default UserService;
