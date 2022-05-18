import React from 'react';
import Farmer from '../../assets/Farmers.png';
import { Link } from 'react-router-dom';
function PostJob() {
  return (
    <div className="max-w-6xl flex items-center flex-col md:flex-row justify-between mx-auto mt-10 md:mb-40">
      <div className="flex justify-center md:block ">
        <img src={Farmer} className="w-4/5" alt="" />
      </div>
      <div className="md:text-right text-center mb-10 md:mb-0 md:pb-20">
        <h1 className="text-secondary font-bold text-xl">Post A Job</h1>
        <p className="text-main px-4 md:px-0 font-thin text-lg my-3">
          Find available skilled, willing and enthusisastic employees on our
          site.
        </p>
        <Link
          className="md:ml-10 py-2 px-6 h-10 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins]"
          to="post-job"
        >
          Post A Job
        </Link>
      </div>
    </div>
  );
}

export default PostJob;
