import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { E164Number } from 'libphonenumber-js/types';

import { useNavigate } from 'react-router-dom';

import {
  IRegisterInput,
  register,
  setAuthSuccess,
  unsetAuthError,
  UserRoles,
} from '../../redux';
import { isValidEmail } from '../../helpers/invalidEmail';

import { useAppSelector, useAppDispatch } from '../../redux/store';

interface ICustomRegisterInput extends IRegisterInput {
  confirm_password?: '';
}
interface Props {
  isEmployer?: boolean;
}
function Sign(props: Props) {
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState<E164Number>();

  const [userData, setUserData] = useState<ICustomRegisterInput>({
    role: UserRoles.EMPLOYEE,
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate();
  const serverError = useAppSelector((state) => state.auth.error);
  const authSuccess = useAppSelector((state) => state.auth.sucess);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.isEmployer) {
      setUserData((prevUserData: any) => {
        return { ...prevUserData, role: UserRoles.EMPLOYER };
      });
    } else {
      setUserData((prevUserData: any) => {
        return { ...prevUserData, role: UserRoles.EMPLOYEE };
      });
    }
  }, [props.isEmployer]);

  useEffect(() => {
    if (serverError) {
      setError(serverError);
    }
    setLoading(false);
  }, [serverError]);

  useEffect(() => {
    if (authSuccess) {
      sessionStorage.setItem('phone', phone ?? `${phone}` ?? '');
      sessionStorage.setItem('role', userData.role);
      sessionStorage.setItem('email', userData.email);
      navigate('/login');
      dispatch(setAuthSuccess(false));
    }
  }, [authSuccess, phone, userData, navigate, dispatch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    if (serverError) {
      dispatch(unsetAuthError());
    }
    if (error) {
      setError('');
    }
  };
  const handleEmailBlur = () => {
    if (
      userData &&
      userData.email &&
      !isValidEmail(userData && userData.email)
    ) {
      setError('Invalid email Address');
    } else if (
      userData &&
      userData.email &&
      userData.email.slice(0, 4) === 'www.'
    ) {
      setError('Invalid email address');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!phone) {
        setError('Provide phone Number');
        return;
      }
      if (userData.password !== userData.confirm_password) {
        setError('Password mismatch');
        return;
      }

      setLoading(true);

      const payload = { ...userData, phone: `+${phone}` };
      delete payload.confirm_password;

      dispatch(
        register({
          ...payload,
        })
      );
      navigate('/login');
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md  ">
          <div>
            <label
              className="block mb-2 text-sm font-bold text-main"
              htmlFor=""
            >
              Email address
            </label>
            <input
              type="email"
              required
              name="email"
              onChange={handleChange}
              value={userData && userData.email}
              onBlur={handleEmailBlur}
              onFocus={handleFocus}
              className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="Email address"
            />
          </div>
          <div>
            <label className=" block mb-2 text-sm font-bold text-main">
              Phone Number
            </label>

            <PhoneInput
              inputClass=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              country={'ke'}
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
            />
          </div>
          <div className="my-3">
            <label className="block mb-2 text-sm font-bold text-main">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={userData && userData.password}
              onFocus={handleFocus}
              required
              className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="Password"
            />
          </div>
          <div className="my-3">
            <label className="block mb-2 text-sm font-bold text-main">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange}
              value={userData && userData.confirm_password}
              onFocus={handleFocus}
              required
              className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div>
          {loading ? (
            <button
              type="submit"
              className="relative my-3 text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            ></button>
          ) : (
            <button
              type="submit"
              className="relative my-3 text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Sign;
