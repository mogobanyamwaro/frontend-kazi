import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Employee from '../pages/Employee';
import EmployerDashboard from '../pages/Employer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import EditProfile from '../pages/Profile/Editprofile';
import EditSkills from '../pages/Profile/EditSkill';
import Register from '../pages/SignUp';
import { PrivateRoute } from './privatePublicRoute';
import Employee from '../pages/Employee/Employee';
import Employer from '../pages/Employer/Employer';

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/profile/edit/skill" element={<EditSkills />} />
      <Route path="/employer" element={<Employer />} />
      <Route path="/employee" element={<Employee />} />
    </Route>
  </Routes>
);
