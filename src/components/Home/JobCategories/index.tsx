import React from 'react';
import JobCategory from './JobCategory';

function JobCategories() {
  return (
    <div className="max-w-6xl  flex flex-col items-center justify-center mx-auto ">
      <div className=" ">
        <h1 className="text-secondary font-bold text-xl text-center my-10 ">
          Popular Job Categories
        </h1>
        <div className="flex justify-between  w-full flex-wrap">
          <JobCategory />
          <JobCategory />
          <JobCategory />
          <JobCategory />
          <JobCategory />
          <JobCategory />
        </div>
      </div>
    </div>
  );
}

export default JobCategories;
