import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import UserService from '../../redux/store/user/user.service';
import DashboardHeader from '../../components/Navbar/Dashboard';
import {
  IProfileInput,
  unsetAuthError,
  updateProfile,
  uploadFile,
} from '../../redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { E164Number } from 'libphonenumber-js';
import PersonImage from '../../assets/person.png';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';

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
    avatar: '',
  });

  const [avatarPreview, setAvatarPreview] = useState('');
  const [phone, setPhone] = useState<E164Number>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState<File>();
  const serverError = useAppSelector((state) => state.auth.error);
  const [error, setError] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    // @ts-ignore
    setAvatar(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        // @ts-ignore
      }
    };
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
      const formData = new FormData();
      // @ts-ignore
      formData.append('file', avatar, avatar.name);

      setLoading(true);
      const data = await UserService.uploadFile(formData);
      userData.avatar = data.url;
      const payload = { ...userData, phone: `+${phone}` };

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
    <div className="flex flex-col   ">
      <DashboardHeader isProfile={true} />
      <form className="flex-grow" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center min-h-full px-4 py-1 -mt-16 sm:px-6 lg:px-8">
          <div className=" relative left-2 h-20 w-20 mb-4 lg:mb-0 mr-4 m-2">
            {avatarPreview !== '' ? (
              <img
                src={avatarPreview}
                alt="post"
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            ) : (
              <img
                src={PersonImage}
                alt="post"
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            )}
            <label className=" flex items-center justify-center bg-gray-lighter">
              <span className="mt-2 text-base leading-normal text-gray-400">
                Upload
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="mt-2 p-4">
            <div className="flex flex-col md:flex-row">
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                  First Name
                </div>
                <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                  <input
                    placeholder="First Name"
                    name="firstName"
                    value={userData && userData.firstName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                  />
                </div>
              </div>
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                  Last Name
                </div>
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
                  UserName
                </div>
                <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                  <input
                    type="text"
                    required
                    placeholder="UserName"
                    name="username"
                    onChange={handleChange}
                    value={userData && userData.username}
                    onFocus={handleFocus}
                    className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                  />
                </div>
              </div>
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 hidden text-main text-xs leading-8 uppercase">
                  Phone
                </div>
                <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                  <PhoneInput
                    inputClass=" bg-primary text-main  relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    country={'ke'}
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
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
              <div className="w-full mx-2 flex-1 svelte-1l8159u">
                <div className="font-bold h-6 mt-3 text-main text-xs leading-8 uppercase">
                  Upload Profile Picture
                </div>
                <div className="bg-white my-2 p-1 flex  rounded svelte-1l8159u">
                  <input
                    type="file"
                    required
                    name="file"
                    onChange={onFileChange}
                    onFocus={handleFocus}
                    className=" form-control block w-full px-2 py-1.5 
                    bg-primary  text-sm
                    font-normal text-gray-700 bg-clip-padding placeholder-gray-500
                    rounded transition ease-in-out m-0
                    focus:outline-none focus:ring-indigo-500 
                    focus:border-indigo-500 focus:z-10 sm:text-sm "
                  />
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
