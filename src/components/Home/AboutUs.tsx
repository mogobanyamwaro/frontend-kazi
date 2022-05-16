import React from 'react';
import Farmer from '../../assets/Farmers.png';
import Construction from '../../assets/Construction-Labourer.png';
function AboutUs() {
  return (
    <div className="flex about-us items-center justify-center w-full mb-20 ">
      <div className="flex w-4/5 items-center  ">
        <div className="flex-1">
          <h1 className="font-bold text-secondary text-xl mb-4">About Us</h1>
          <p className="text-left pr-40 text-main text-sm">
            We connect people with their employees on any level of education,
            skills, experience, talent, inventions and training. Our Vision is
            to bridge the gap in the market by connecting employer with the
            employee, focusing more on the informal sector.
          </p>
        </div>
        <div className="flex-1 relative ">
          <div>
            <img src={Farmer} alt="" className="w-3/5 " />
          </div>
          <div>
            <img
              src={Construction}
              alt=""
              className="absolute top-28 left-52 w-3/5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
