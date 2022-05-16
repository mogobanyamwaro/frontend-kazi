import React from 'react';

interface ListProps {
  skill: string;
}

const List: React.FC<ListProps> = (props) => {
  return (
    <div className="py-2 px-2 ml-3 text-xs leading-3 text-gray-700 rounded-full bg-indigo-100">
      {props.skill}
    </div>
  );
};

export default List;
