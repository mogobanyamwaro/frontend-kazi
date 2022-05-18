import React, { useEffect } from 'react';
import JobFeed from '../../components/Employee/JobFeed';
import JobCategory from '../../components/Employer/JobCategoryCard';
import DashboardHeader from '../../components/Navbar/Dashboard';
import SearchBox from '../../components/SearchBox';
import ViewProfile from '../../containers/ViewProfile';
import employeeFeed from '../../data/employeefeed-dummy-data';
import jobcategories from '../../data/jobcategories-dummy-data';
import premiumEmployees from '../../data/premiumemployees-dummy-data';
import { useToken } from '../../hooks/useToken';
import { getCurrentUser, getMySkills, UserRoles } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import GoodMorning from './GoodMorning';
import EmployeeFeedCard from '../../components/Employee/FeedCard';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Employee() {
  const tokens = useToken();
  const navigate = useNavigate();
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
  //@ts-ignore
  if (userData.role !== UserRoles.EMPLOYEE) {
    navigate('/');
  }
  const convertedSkills = Object.entries(skills);
  return (
    <div className="employer-section overflow-x-hidden">
      <div className=" md:px-20 px-4 ">
        <DashboardHeader />
        <div className="flex mb-4 ">
          {/* Flex one components */}
          <div className="flex-1">
            {!loading && <GoodMorning userData={userData} />}
            <div className="mt-5">
              <h1 className="text-secondary font-bold text-2xl">My Job Feed</h1>
            </div>
            <SearchBox />
            <div className="w-11/12 h-screen overflow-scroll mt-2">
              {premiumEmployees.map((employee: any) => (
                <JobFeed card={employee} />
              ))}
            </div>

            <div>
              <h1 className="text-secondary font-bold text-xl text-left">
                Employee Feed
              </h1>
              <div className="md:w-9/12 h-screen overflow-scroll">
                {employeeFeed.map((employee: any) => (
                  <EmployeeFeedCard employee={employee} />
                ))}
              </div>
            </div>
          </div>
          <div>
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
            <div className="hidden md:block">
              <h1 className="text-secondary font-bold text-xl text-center">
                Job Categories
              </h1>
              <div className="job-card overflow-y-scroll">
                {jobcategories.map((job: any) => (
                  <JobCategory details={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Employee;
