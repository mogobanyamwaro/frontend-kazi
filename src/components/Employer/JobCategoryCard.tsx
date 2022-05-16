import React from 'react';

interface jobdetails {
  details: {
    img?: string;
    experience?: string;
    positions?: string;
    job?: string;
  };
}
const JobCategory: React.FC<jobdetails> = (props) => {
  return (
    <div className="flex flex-col rounded-md  bg-primary w-full ">
      <div className="flex flex-col w-full p-6">
        <img
          src={props.details.img}
          className="object-cover w-full"
          alt={props.details.job}
        />
        <h3 className="mt-5 mb-2  text-lg font-[Poppins] text-main font-bold">
          {props.details.job}
        </h3>
        <p className="mb-2 font-light  text-grey font-[Poppins]">
          Experience: {props.details.experience}
        </p>
        <p className="mb-2 font-light text-grey font-[Poppins]">
          {props.details.positions} positions
        </p>
      </div>
    </div>
  );
};
export default JobCategory;
