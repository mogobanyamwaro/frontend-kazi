import React, { Component } from 'react';
import Post from '../../assets/Post.png';
import ClericalWorker from '../../assets/Clerical-Worker.png';
import DashboardHeader from '../../components/Navbar/Dashboard';
import premiumEmployees from '../../data/premiumemployees-dummy-data';
import jobcategories from '../../data/jobcategories-dummy-data';
import employeeFeed from '../../data/employeefeed-dummy-data';
import { Link } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import PremiunCard from '../../components/Employer/PremiunCard';
import EmployeeFeedCard from '../../components/Employee/FeedCard';
import JobCategory from '../../components/Employer/JobCategoryCard';
import Footer from '../../components/Footer';
const today: string = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});
export default class EmployerDashboard extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden employer-section ">
        <div className="px-10">
          <DashboardHeader />
          <main className="flex-grow">
            <div className="container mb-2 space-x-4 flex mx-auto ">
              <div className="bg-white flex-auto rounded  p-6 mt-1 w-96 h-52 ">
                <div className="flex space-x-4 items-center justify-between w-2/6 sm:w-full mb-8">
                  <div className="flex items-center">
                    <div className="ml-6 mt-12">
                      <h3 className="mb-1 text-amber-200 leading-5 font-bold text-2xl py-2 text-primary">
                        {today}
                      </h3>
                      <p className=" py-2 text-amber-300  text-sm tracking-normal font-normal leading-5 text-primary">
                        Good Morning
                      </p>
                      <h3 className="mb-1 leading-5 font-bold text-amber-300 text-2xl text-primary">
                        Food Processing Co.
                      </h3>
                    </div>
                  </div>
                  <div className="py-6 mx-4 shrink-0">
                    <div className="h-20 w-20 mb-4 lg:mb-0 mr-4">
                      <img src={Post} alt="post" className="w-12 h-12 m-2" />
                    </div>

                    <button
                      type="button"
                      className="px-4 py-3 font-bold text-white  bg-secondary rounded hover:bg-secondary font-[Poppins]"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
              <ViewProfile />
            </div>
            <div className="container my-4 mx-auto  pt-6 flex">
              <div className="flex-auto w-96 rounded  p-6 mt-4 ">
                <div className="flex items-center justify-between w-1/6 sm:w-full mb-8">
                  <div className="flex items-center">
                    <div className=" mt-1">
                      <h3 className=" text-secondary mb-1 leading-5 font-bold text-2xl py-2">
                        Premium Employees
                      </h3>
                      <SearchBox />
                      <div className="container w-852  bg-white space-y-4 my-8  mx-auto flex flex-col overflow-auto">
                        {premiumEmployees.map((employee: any) => (
                          <PremiunCard card={employee} />
                        ))}
                      </div>
                      <h3 className=" text-secondary mb-2 bottom-2 leading-5 font-bold text-2xl py-2">
                        Employee Feed
                      </h3>
                      <div className="container  my-8 w-full mx-auto flex flex-col overflow-auto">
                        {employeeFeed.map((employee: any) => (
                          <EmployeeFeedCard employee={employee} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative left-8 py-10 mt-5 w-32 mx-12 flex-1 overflow-scroll">
                <div className="mx-auto sm:w-3/4  font-sans ">
                  <h1 className="text-xl text-center text-secondary font-bold break-n">
                    Employee Categories
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
  }
}

const ViewProfile = () => {
  return (
    <div className=" mt-1  sm:w-full flex-1 w-32  rounded-3xl overflow-hidden   my-3 bg-white">
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
