import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { E164Number } from 'libphonenumber-js';
import { ILoginInput, login, unsetAuthError, UserRoles } from '../../redux';
import { persistToken } from '../../helpers/persistToken';
import { getRole, getToken } from '../../common/privatePublicRoute';
import { useAppDispatch, useAppSelector } from '../../redux/store';

function LoginForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState<E164Number>();
  const [userData, setUserData] = useState<ILoginInput>({
    email: '',
    password: '',
    phone: '',
  });
  const location = useLocation();
  const [isEmployer, setIsEmployer] = useState<boolean>();
  const [isEmployee, setIsEmployee] = useState<boolean>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const tokens = useAppSelector((state) => state.auth._id);

  const serverError = useAppSelector((state) => state.auth.error);

  useEffect(() => {
    if (serverError) {
      sessionStorage.setItem('role', isEmployee ? 'EMPLOYEE' : 'EMPLOYER');
      if (userData.email) {
        sessionStorage.setItem('email', userData.email);
      }
      setError('');
      navigate('/');
      console.log('something went wrong');
      dispatch(unsetAuthError());
      setError(serverError);
      setLoading(false);
    }
  }, [serverError, userData, navigate, dispatch, isEmployee]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = () => {
    if (serverError) {
      dispatch(unsetAuthError());
    }

    if (error) {
      setError('');
    }
  };

  useEffect(() => {
    if (tokens && tokens.accessToken && !error) {
      persistToken(tokens ?? '');
      const token = getToken();
      const role = getRole(token ?? '');

      if (role === UserRoles.EMPLOYEE) {
        navigate('/profile', { replace: true });
      } else if (role === UserRoles.EMPLOYER) {
        navigate('/employer', { replace: true });
      } else {
        navigate('/');
      }
      setLoading(false);
    }
  }, [tokens, isEmployee, isEmployer, navigate, dispatch, error]);
  console.log(tokens);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      let payload = { ...userData };

      payload = { ...payload, phone: `+${phone}` };
      delete payload.phone;
      await dispatch(login({ ...payload }));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Something went wrong. Please try again!');
    }
  };
  return (
    <div>
      {' '}
      <div>
        {' '}
        <form onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            {
              <div className="mb-4 flex flex-col justify-center">
                <label className="block mb-2 text-sm font-bold text-main text-center font-[Poppins]">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  value={userData && userData.email}
                  required
                  className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                  placeholder="Email address"
                />
              </div>
            }

            <div className="flex flex-col justify-center items-center">
              <label className="block mb-2 text-sm font-bold text-main text-center font-[Poppins]">
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                onChange={handleChange}
                onFocus={handleFocus}
                value={userData && userData.password}
                className=" bg-primary relative block w-3/4 px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            {loading ? (
              <button
                type="submit"
                disabled
                className="relative mt-6 text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-white group-hover:text-"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="relative mt-9 text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-white group-hover:text-"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                Log in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
