import React from 'react';

interface CardProps {
  employee: { name?: string; description?: string; img?: string };
}

const EmployeeFeedCard: React.FC<CardProps> = (props) => {
  return (
    <div className="relative right-20 left-5 flex items-center justify-center py-8 px-2">
      <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-amber-400  ">
        <img
          src={props.employee.img}
          alt={props.employee.name}
          className="w-full h-36 object-cover"
        />
        <h1 className="text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">
          {props.employee.name}
        </h1>
        <p className="pt-4 text-xs leading-4 font-sans">
          {props.employee.description}
        </p>

        <button className="focus:outline-none text-black  bg-secondary text-sm font-medium py-3 w-2/6 rounded mt-5">
          Contact
        </button>
      </div>
    </div>
  );
};

export default EmployeeFeedCard;
