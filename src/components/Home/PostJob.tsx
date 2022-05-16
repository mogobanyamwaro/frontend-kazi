import React from 'react';
import Farmer from '../../assets/Farmers.png';
import { Link } from 'react-router-dom';
function PostJob() {
  return (
    <div className="max-w-6xl flex items-center justify-between mx-auto mt-10 mb-40">
      <div>
        <img src={Farmer} className="w-4/5" alt="" />
      </div>
      <div className="text-right pb-20">
        <h1 className="text-secondary font-bold text-xl">Post A Job</h1>
        <p className="text-main font-thin text-lg my-3">
          Find available skilled, willing and enthusisastic employees on our
          site.
        </p>
        <Link
          className="ml-10 py-2 px-6 h-10 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins]"
          to="post-job"
        >
          Post A Job
        </Link>
      </div>
    </div>
  );
}

export default PostJob;
