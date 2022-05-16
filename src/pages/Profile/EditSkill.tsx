import React from 'react';

import Skill from '../../components/Profile/Skill';

const EditSkills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-black opacity-50 text-sm pl-8">
        Please indicate your skills...
      </h1>
      <Skill />
    </div>
  );
};

export default EditSkills;
