import React from 'react';
import Arrow from '../../assets/Arrow .png';
import Register from '../../assets/register.png';
import Skills from '../../assets/skills.png';
import Connect from '../../assets/connect.png';
import Line from '../../assets/Line.png';
function ItWorks() {
  return (
    <div className="flex it-works w-full justify-center ">
      <div className="bg-primary  it-works mt-3 flex flex-col md:flex-row md:justify-evenly w-4/5 items-center">
        <div>
          <h1 className="text-main font-bold text-3xl">How it works</h1>
          <div className="w-4/5 h-1/4 pl-7">
            <img src={Arrow} alt="" className=" " />
          </div>
        </div>
        <div className="flex md:justify-evenly  flex-col md:flex-row  items-center">
          <div className="flex flex-col items-center">
            <div className="w-20 bg-white flex justify-center h-20 items-center rounded-full">
              <img src={Register} alt="" className="w-10 h-10" />
            </div>

            <h2 className="text-main">Register With Us</h2>
          </div>
          <div className="md:ml-7 my-3 md:my-0">
            <img src={Line} alt="" className=" hidden md:block  " />
            <hr className="w-32 h-1 font-bold md:hidden" />
          </div>
        </div>
        <div className="flex justify-evenly flex-col md:flex-row  it-works items-center">
          <div className="flex flex-col items-center">
            <div className="w-20 bg-white flex justify-center h-20 items-center rounded-full">
              <img src={Skills} alt="" className="w-10 h-10" />
            </div>
            <h2 className="text-main text-center">
              Update your skills <br /> and experience
            </h2>
          </div>
          <div className="ml-7 ">
            <img src={Line} alt="" className=" hidden md:block " />
            <hr className="w-32 h-1 font-bold md:hidden" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 bg-white flex justify-center h-20 items-center rounded-full">
            <img src={Connect} alt="" />
          </div>
          <h2 className="text-main text-center">
            Connect with your <br /> employer
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ItWorks;
