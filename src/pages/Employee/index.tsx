import React, { Component, useEffect } from 'react';
import Post from '../../assets/Post.png';
import { ViewProfile } from '../../containers/ViewProfile';
import DashboardHeader from '../../components/Navbar/Dashboard';
import premiumEmployees from '../../data/premiumemployees-dummy-data';
import jobcategories from '../../data/jobcategories-dummy-data';
import employeeFeed from '../../data/employeefeed-dummy-data';
import SearchBox from '../../components/SearchBox';
import EmployeeFeedCard from '../../components/Employee/FeedCard';
import JobCategory from '../../components/Employer/JobCategoryCard';
import Footer from '../../components/Footer';
import JobFeed from '../../components/Employee/JobFeed';
import { useToken } from '../../hooks/useToken';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getCurrentUser, getMySkills } from '../../redux';
import { Link } from 'react-router-dom';
const today: string = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export const Employee = () => {
  const tokens = useToken();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCurrentUser());

      if (tokens === true) {
        try {
          await dispatch(getCurrentUser());
          await dispatch(getMySkills());
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
    <div className="flex flex-col min-h-screen overflow-hidden employer-section  ">
      <div className="px-10">
        <DashboardHeader />
        <main className="flex-grow">
          <div className="container mb-2 space-x-4 flex mx-auto ">
            {/* Do something here */}
            <div className="bg-white flex-auto rounded  md:p-6 mt-1 w-96 md:h-52 ">
              <div className="flex md:space-x-4 items-center justify-between w-2/6 sm:w-full mb-8">
                <div className="flex items-center">
                  <div className="ml-6 mt-12 flex flex-row-reverse md:block ">
                    <h3 className="mb-1 hidden md:block text-amber-200 leading-5 font-bold text-2xl py-2 text-primary">
                      {today}
                    </h3>
                    <div className="mr-10 md:mr-0">
                      <p className=" py-2 text-amber-300  text-sm tracking-normal font-normal leading-5 text-primary">
                        Good Morning
                      </p>
                      <h3 className="mb-1 leading-5 font-bold text-amber-300 text-2xl text-primary">
                        {
                          //@ts-ignore
                          userData.isLive
                            ? //@ts-ignore
                              userData.profile.firstName +
                              ' ' +
                              //@ts-ignore
                              userData.profile.lastName
                            : 'fill in your first name'
                        }
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="md:py-6 mx-4 shrink-0 mt-12">
                  <div className="h-20 w-20 mb-4 lg:mb-0 mr-4">
                    <img src={Post} alt="post" className="w-12 h-12 m-2" />
                  </div>
                  <Link
                    className="md:ml-16 md:hidden py-2 px-5 h-10 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins]"
                    to="post-job"
                  >
                    Post A Job
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {!loading && (
                <ViewProfile
                  fullname={
                    //@ts-ignore
                    userData.isLive
                      ? //@ts-ignore
                        userData.profile.firstName +
                        ' ' +
                        //@ts-ignore
                        userData.profile.lastName
                      : 'fill in your first name'
                  }
                  convertedSkills={convertedSkills}
                  loading={loading}
                />
              )}
            </div>
          </div>
          <div className="md:container my-4 md:mx-auto  md:pt-6 md:flex">
            <div className="md:flex-auto w-96 rounded  md:p-6 mt-4 ">
              <div className="flex md:items-center md:justify-between w-1/6 sm:w-full mb-8">
                <div className="flex md:items-center">
                  <div className=" mt-1">
                    <h3 className=" text-secondary mb-1 leading-5 font-bold text-2xl py-2">
                      My Job Feed
                    </h3>
                    <SearchBox />
                    <div className="flex md:justify-between overflow-scroll md:overflow-hidden w-full mr-4 md:mr-0  md:flex-wrap">
                      {premiumEmployees.map((employee: any) => (
                        <JobFeed card={employee} />
                      ))}
                    </div>
                    <h3 className=" text-secondary mb-2 bottom-2 leading-5 font-bold text-2xl py-2">
                      Employee Feed
                    </h3>
                    <div className="md:container  my-8 md:w-full md:mx-auto  flex flex-col md:overflow-auto">
                      {employeeFeed.map((employee: any) => (
                        <EmployeeFeedCard employee={employee} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:relative hidden md:left-8 py-10 mt-5 md:w-32 md:mx-12 md:flex-1 overflow-scroll">
              <div className="mx-auto sm:w-3/4  font-sans ">
                <h1 className="text-xl text-center text-secondary font-bold break-n">
                  Job Categories
                </h1>
              </div>
              <div className="container grid max-w-md grid-cols-1 gap-4 mt-4 ">
                {jobcategories.map((job: any) => (
                  <JobCategory details={job} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default Employee;
