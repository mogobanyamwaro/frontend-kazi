import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.png';
import HouseManager from '../../assets/House-Manager.png';

import { Link } from 'react-router-dom';
import DashboardHeader from '../../components/Navbar/Dashboard';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getCurrentUser, getMySkills } from '../../redux';
import { useToken } from '../../hooks/useToken';

export function ShowSkills() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex justify-between w-full my-3">
        <p className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
          UI/UX Design
        </p>
      </div>
    </div>
  );
}

function Profile() {
  const [openTab, setOpenTab] = useState(1);

  const tokens = useToken();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCurrentUser());
      await dispatch(getMySkills());
      if (tokens === true) {
        try {
          await dispatch(getCurrentUser());
        } catch (error) {
          console.log('ERRoR dougas >>' + error);
        }
      }
    };
    fetchData();
  }, [dispatch, tokens]);
  const { userData, loading, skills } = useAppSelector((state) => state.user);
  if (loading) {
    return <div>Loading...</div>;
  }

  const convertedSkills = Object.entries(skills);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden max-w-6xl mx-auto">
      <DashboardHeader isProfile={true} />
      <main className="flex-grow">
        <div className="flex items-center justify-center min-h-full px-4 py-12 -mt-16 sm:px-6 lg:px-8">
          <div className="w-full  space-y-8">
            <div>
              <h2 className=" text-3xl font-extrabold text-center text-green font-[Poppins]">
                Personal Details
              </h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
                  role="tablist"
                >
                  <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                    <a
                      className={
                        'text-xs text-green font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 1
                          ? 'text-white bg-primary'
                          : 'text-primary bg-white')
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Personal Details
                    </a>
                  </li>
                  <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                    <a
                      className={
                        'text-xs text-green font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 2
                          ? 'text-white bg-primary'
                          : 'text-primary bg-white')
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Skills and Experience
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? 'block' : 'hidden'}
                        id="link1"
                      >
                        <div className="flex flex-col space-y-2 items-center justify-center py-6 mx-4 shrink-0">
                          <div className="h-20 w-20 mb-4 lg:mb-0 mr-4">
                            <img
                              src={HouseManager}
                              alt="post"
                              className="h-full w-full rounded-full overflow-hidden shadow"
                            />
                          </div>

                          <div className="flex-auto flex flex-row-reverse">
                            <Link to={'/profile/edit'}>
                              <button
                                className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                              hover:bg-teal-600  
                            bg-secondary
                              border duration-200 ease-in-out 
                            border-secondary transition"
                              >
                                Edit Profile
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="bg-white p-3 shadow-sm rounded-sm w-full">
                          <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                              <div className="grid grid-cols-2 my-3 ">
                                <div className="px-2 py-2 font-semibold text-main">
                                  First Name
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  {
                                    //@ts-ignore
                                    userData.isLive
                                      ? //@ts-ignore
                                        userData.profile.firstName
                                      : 'fill in your first name'
                                  }
                                </div>
                              </div>
                              <div className="grid grid-cols-2 my-3 ">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Last Name
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  {
                                    //@ts-ignore
                                    userData.isLive
                                      ? //@ts-ignore
                                        userData.profile.lastName
                                      : ' Fill your last name'
                                  }
                                </div>
                              </div>
                              <div className="grid grid-cols-2 my-3">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Email
                                </div>
                                <div className="px-2 py-2">
                                  <p className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                    {
                                      //@ts-ignore
                                      userData.isLive
                                        ? //@ts-ignore
                                          userData.email
                                        : ' Fill your email'
                                    }
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 my-3">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Phone Number
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  {
                                    //@ts-ignore
                                    userData.isLive
                                      ? //@ts-ignore
                                        userData.profile.phone
                                      : ' Fill your phone number'
                                  }
                                </div>
                              </div>

                              <div className="grid grid-cols-2 my-3">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Gender
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  Female
                                </div>
                              </div>
                              <div className="grid grid-cols-2 my-3">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Country
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  {' '}
                                  {
                                    //@ts-ignore
                                    userData.isLive
                                      ? //@ts-ignore
                                        userData.profile.country
                                      : ' Fill your country'
                                  }
                                </div>
                              </div>
                              <div className="grid grid-cols-2 my-3">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Country
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  {' '}
                                  {
                                    //@ts-ignore
                                    userData.isLive
                                      ? //@ts-ignore
                                        userData.profile.country
                                      : ' Fill your country'
                                  }
                                </div>
                              </div>
                              <div className="grid grid-cols-2 my-3">
                                <div className="px-2 py-2 font-semibold text-main">
                                  Registration Status
                                </div>
                                <div className=" bg-primary relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500  rounded-none  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ">
                                  {' '}
                                  {
                                    //@ts-ignore
                                    userData.isLive
                                      ? 'Verified'
                                      : ' Not Verified'
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={openTab === 2 ? 'block' : 'hidden'}
                        id="link2"
                      >
                        <div className="flex flex-col space-y-2 items-center justify-center py-6 mx-4 shrink-0">
                          <div className="h-20 w-20 mb-4 lg:mb-0 mr-4">
                            <img
                              src={HouseManager}
                              alt="post"
                              className="h-full w-full rounded-full overflow-hidden shadow"
                            />
                          </div>
                          <div className="flex-auto flex flex-row-reverse">
                            <Link to={'/profile/edit/skill'}>
                              <button
                                className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                              hover:bg-teal-600  
                            bg-secondary
                              border duration-200 ease-in-out 
                            border-secondary transition"
                              >
                                Edit Skills
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="bg-white  p-3 shadow-sm rounded-sm w-full">
                          <div className="text-gray-700">
                            {convertedSkills.map((items) => {
                              if (items[1] !== '' && items[1] !== null) {
                                return (
                                  <div className=" flex text-center font-bold  my-3">
                                    <p className=" bg-primary px-3 py-2 rounded-none rounded-t-md ">
                                      {items[1]}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Profile;
