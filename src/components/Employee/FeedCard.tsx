import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '../../assets/person.png';

interface CardProps {
  card: {
    about?: string;
    text?: string;
    avatar?: string;
    experience?: string;
    skills?: string[];
    firstName?: string;
    lastName?: string;
  };
}
const EmployeeFeedCard: React.FC<CardProps> = (props) => {
  return (
    <div className="flex md:flex-col  rounded-md  bg-primary md:w-full w-80 h-96  my-2 ">
      <div className="flex flex-col h-96 justify-between md:w-full mt-0 md:p-4">
        <h1 className="text-main font-bold">
          {props.card.firstName !== null || props.card.lastName !== null
            ? props.card.firstName + ' ' + props.card.lastName
            : 'Anonymous'}
        </h1>
        <div className="h-48">
          {props.card.avatar !== null ? (
            <img src={props.card.avatar} className="h-32 w-8/12" alt="avatar" />
          ) : (
            <img src={PersonIcon} className="h-32 w-8/12" alt="avatar" />
          )}
        </div>

        <p className="mb-2 font-light  text-main font-[Poppins]  ">
          {props.card.about !== null ? props.card.about : 'No About'}
        </p>
        <div className="flex md:justify-end justify-center mb-5 md:mb-0">
          <Link
            className="py-2 ml-10 md:w-20 w-36 text-center items-end font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-4"
            to="#"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeFeedCard;
