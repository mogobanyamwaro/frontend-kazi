import { Link } from 'react-router-dom';
import List from '../List';
import PersonIcon from '../../assets/person.png';
interface CardProps {
  card: {
    name?: string;
    about?: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    experience?: string;
    uniqueSkills?: [];
  };
}
function PremiunCard(props: CardProps) {
  return (
    <div className="flex bg-primary md:py-2 ml-2 mt-2  md:flex-row flex-col">
      <div className="flex flex-col items-center justify-center mr-10">
        <div className="h-20 w-20 rounded-full flex justify-center bg-white overflow-hidden text-center">
          {props.card.avatar !== null ? (
            <img src={props.card.avatar} alt="avatar" />
          ) : (
            <img src={PersonIcon} alt="avatar" />
          )}
        </div>
        {props.card.firstName !== null && props.card.lastName !== null ? (
          <h1 className="text-sm text-main font-bold">
            {props.card.firstName + ' ' + props.card.lastName}
          </h1>
        ) : (
          <h1 className="text-sm text-main font-bold">No Name</h1>
        )}
      </div>
      <div className="">
        <h1 className="text-main font-medium">About</h1>
        <p className="text-main  text-sm">
          {props.card.about !== null ? props.card.about : 'No About'}
        </p>
        <p className="text-sm text-main">Experience Level: Less than 1 year</p>

        <div className="text-xs flex items-start  flex-wrap  flex-col text-center ">
          <p className="bg-white   my-2">House Maintenance</p>
          <div className="flex justify-between">
            <div className="flex  flex-row  ">
              <p className="bg-white  px-2  my-2">cooking</p>
              <p className="bg-white  ml-4 px-2 my-2">Nany</p>
              <p className="bg-white ml-4 px-2  my-2">Cleaning</p>
            </div>
            <Link
              className="py-2 ml-10  font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-4"
              to="#"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiunCard;
