import React from 'react';

import Skill from '../../components/Profile/Skill';

const EditSkills = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center w-80 overflow-hidden md:block md:w-full">
      <h1 className="text-black opacity-50 text-sm md:pl-8 w-48 md:w-full ">
        Please indicate your skills...
      </h1>
      <Skill />
    </div>
  );
};

export default EditSkills;
