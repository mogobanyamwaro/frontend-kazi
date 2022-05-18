import React from 'react';
import Farmer from '../../assets/Farmers.png';
import Construction from '../../assets/Construction-Labourer.png';
function AboutUs() {
  return (
    <div className="flex about-us items-center justify-center w-full mb-20  mt-24 md:mt-0 ">
      <div className="flex w-4/5 items-center flex-col-reverse md:flex-row  ">
        <div className="flex-1 mt-24 md:mt-0 ">
          <h1 className="font-bold text-secondary text-xl text-center md:text-left mb-4">
            About Us
          </h1>
          <p className="md:text-left md:pr-40 text-main text-sm">
            We connect people with their employees on any level of education,
            skills, experience, talent, inventions and training. Our Vision is
            to bridge the gap in the market by connecting employer with the
            employee, focusing more on the informal sector.
          </p>
        </div>
        <div className="flex-1 relative ml-1 md:ml-0  ">
          <div>
            <img src={Farmer} alt="" className="md:w-3/5 w-4/5 " />
          </div>
          <div>
            <img
              src={Construction}
              alt=""
              className="absolute top-14 w-4/5 md:top-28 left-16 md:left-52 md:w-3/5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
