import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className=" w-full h-screen bg-hero md:bg-cover bg-center ">
      <div className="heading-container absolute flex items-center text-center justify-center md:justify-end w-full">
        <div className="flex flex-col justify-start md:w-1/2">
          <h1 className="text-5xl text-white">Get Manpower</h1>
          <p className="mt-5 text-2xl text-gray">Land your </p>
          <p className="my-2 text-gray text-2xl">dream job here</p>
          <div className="flex ">
            <Link
              className="mr-10 py-2 h-10 px-6 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins]"
              to="/find-job"
            >
              Find Jobs
            </Link>
            <Link
              className="ml-10 py-2 px-6 h-10 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins]"
              to="post-job"
            >
              Post A Job
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
