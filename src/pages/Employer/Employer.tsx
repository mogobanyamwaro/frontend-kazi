import React, { useEffect } from 'react';
import EmployeeFeedCard from '../../components/Employee/FeedCard';
import PremiunCard from '../../components/Employer/PremiunCard';
import DashboardHeader from '../../components/Navbar/Dashboard';
import SearchBox from '../../components/SearchBox';
import employeeFeed from '../../data/employeefeed-dummy-data';
import premiumEmployees from '../../data/premiumemployees-dummy-data';
import JobCategory from '../../components/Employer/JobCategoryCard';
import jobcategories from '../../data/jobcategories-dummy-data';
import ClericalWorker from '../../assets/Clerical-Worker.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getCurrentUser, getEmployees, UserRoles } from '../../redux';
const today: string = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

function Employer() {
  const tokens = useToken();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCurrentUser());

      if (tokens === true) {
        try {
          await dispatch(getCurrentUser());
          await dispatch(getEmployees());
        } catch (error) {
          console.log('ERRoR dougas >>' + error);
        }
      }
    };
    fetchData();
  }, [dispatch, tokens]);

  const { userData, loading, Employees } = useAppSelector(
    (state) => state.user
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  //@ts-ignore
  if (userData.role !== UserRoles.EMPLOYER) {
    navigate('/');
  }
  console.log(Employees);

  return (
    <div className="employer-section overflow-x-hidden">
      <div className=" md:px-20 px-4 ">
        <DashboardHeader />
        <div className="flex mb-4 ">
          {/* Flex one components */}
          <div className="flex-1">
            <GoodMornin />
            <div className="mt-5">
              <h1 className="text-secondary font-bold text-2xl">
                {' '}
                Premium Employees
              </h1>
            </div>
            <SearchBox />
            <div className="md:w-11/12 h-screen overflow-scroll mt-2">
              {premiumEmployees.map((employee: any) => (
                <PremiunCard card={employee} />
              ))}
            </div>
            <div>
              <h1 className="text-secondary font-bold text-xl text-left">
                Employee Feed
              </h1>
              <div className="md:w-9/12  h-screen overflow-scroll">
                {employeeFeed.map((employee: any) => (
                  <EmployeeFeedCard employee={employee} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <ViewProfile />
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

export default Employer;

function GoodMornin() {
  return (
    <div>
      <div className=" bg-white md:mr-10 h-48 flex flex-col justify-around  pl-5">
        <h1 className="text-primary font-bold text-2xl">{today}</h1>
        <p className="text-primary font-bold text-sm">Good Morning,</p>
        <h1 className="text-secondary font-bold text-xl">
          Food Processing Co.
        </h1>
      </div>
    </div>
  );
}
const ViewProfile = () => {
  return (
    <div className=" mt-1  sm:w-full flex-1 w-32 hidden md:block rounded-3xl overflow-hidden   my-3 bg-white">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden  mt-8 bg-main ">
          <img
            src={ClericalWorker}
            className="object-fill h-20 w-20"
            alt="profile"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-main text-sm font-bold font-sans">
            Food Processing Co.
          </h3>
          <p className="mt-2 font-sans font-light text-md text-black">
            People Employed: 10
          </p>
          <p className="mt-2 font-sans font-light text-black">
            Open Job Opportunities: 5
          </p>
          <p className="mt-2 font-sans font-light text-black">
            Customer Rating : 4/5
          </p>
          <Link to={'/profile'}>
            <button className="focus:outline-none text-main  bg-primary text-sm font-medium py-2 w-20 rounded mt-2">
              My Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
