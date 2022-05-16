import React, { ChangeEvent, FormEvent, useState } from 'react';

import HouseManager from '../../assets/House-Manager.png';
import DashboardHeader from '../../components/Navbar/Dashboard';
import { IProfileInput, unsetAuthError, updateProfile } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { E164Number } from 'libphonenumber-js';
import { isValidEmail } from '../../helpers/invalidEmail';
import PhoneInput from 'react-phone-input-2';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IProfileInput>({
    firstName: '',
    country: '',
    lastName: '',
    city: '',
    about: '',
    username: '',
    phone: '',
  });
  const [phone, setPhone] = useState<E164Number>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const serverError = useAppSelector((state) => state.auth.error);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    if (serverError) {
      dispatch(unsetAuthError());
    }
    if (error) {
      setError('');
    }
  };
  const handeTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleTextAreaFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (serverError) {
      dispatch(unsetAuthError());
    }
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const payload = { ...userData, phone: `+${phone}` };
      setLoading(true);

      dispatch(
        updateProfile({
          ...payload,
        })
      );
      setLoading(false);
      navigate('/profile');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      <DashboardHeader isProfile={true} />
      <form className="flex-grow" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center min-h-full px-4 py-1 -mt-16 sm:px-6 lg:px-8">
          <div className=" relative left-2 h-20 w-20 mb-4 lg:mb-0 mr-4 m-2">
            <img
              src={HouseManager}
              alt="post"
              className="h-full w-full rounded-full overflow-hidden shadow"
            />
            <label className=" flex items-center justify-center bg-gray-lighter">
              <span className="mt-2 text-base leading-normal text-gray-400">
                Upload
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="mt-2 p-4">
            <div>
              <div className="font-bold text-main text-xs leading-8 uppercase h-6 mx-2 mt-3">
                Full Name
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full flex-1 mx-2 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <input
                      placeholder="Last Name"
                      name="firstName"
                      value={userData && userData.firstName}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    />
                  </div>
                </div>
                <div className="w-full flex-1 mx-2 svelte-1l8159u">
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      value={userData && userData.lastName}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                    Username
                  </div>
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <input
                      type="text"
                      required
                      name="username"
                      onChange={handleChange}
                      value={userData && userData.username}
                      onFocus={handleFocus}
                      className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    />
                  </div>
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                    Phone Number
                  </div>
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <PhoneInput
                      inputClass=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                      country={'ke'}
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 -mt-10 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                    About
                  </div>
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <textarea
                      name="about"
                      value={userData && userData.about}
                      onChange={handeTextAreaChange}
                      onFocus={handleTextAreaFocus}
                      placeholder="I am a software developer....."
                      className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                    County
                  </div>
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <input
                      name="country"
                      value={userData && userData.country}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      placeholder="Nairobi"
                      className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    />
                  </div>
                </div>
                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                  <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                    City/Town
                  </div>
                  <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                    <input
                      name="city"
                      value={userData && userData.city}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      placeholder="Nairobi"
                      className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {loading ? (
                <button
                  type="submit"
                  className="relative text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Updating...
                </button>
              ) : (
                <button
                  type="submit"
                  className="relative text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
