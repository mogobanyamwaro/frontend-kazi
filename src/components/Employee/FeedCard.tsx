import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  employee: { name?: string; description?: string; img?: string };
}

const EmployeeFeedCard: React.FC<CardProps> = (props) => {
  return (
    <div className="flex md:flex-col  rounded-md  bg-primary md:w-full w-80 h-96  my-2 ">
      <div className="flex flex-col h-96 justify-between md:w-full mt-0 md:p-4">
        <h1 className="text-main font-bold">{props.employee.name}</h1>
        <div className="h-48">
          <img
            src={props.employee.img}
            className="h-3/4 w-full"
            alt={props.employee.name}
          />
        </div>

        <p className="mb-2 font-light  text-main font-[Poppins]  ">
          {props.employee.description}
        </p>
        <div className="flex md:justify-end justify-center mb-5 md:mb-0">
          <Link
            className="py-2 ml-10 md:w-20 w-36 text-center items-end font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-4"
            to="/find-jobs"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFeedCard;
