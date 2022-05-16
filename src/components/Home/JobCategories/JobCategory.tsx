import React from 'react';
import { Link } from 'react-router-dom';
import Farmer from '../../../assets/Farmers.png';
function JobCategory() {
  // image, title, experience, position;
  return (
    <div className="rounded-lg md:overflow-hidden bg-primary w-80  mb-7 ml-4 md:ml-0">
      <div>
        <img src={Farmer} className="object-contain " alt="" />
      </div>
      <div className="mx-2 my-2">
        <h1 className="text-black  font-medium capitalize text-sm">
          House Manager
        </h1>
        <p className="text-sm font-thin my-2">Experience: 1year</p>
      </div>
      <div className="flex justify-between mx-2 pb-3">
        <p className="text-sm font-thin">100+ positions</p>
        <Link
          className=" bg-white text-main border border-main rounded text-sm p-1"
          to="/apply"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}

export default JobCategory;
