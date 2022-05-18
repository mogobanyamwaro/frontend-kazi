import { Link } from 'react-router-dom';
import List from '../List';

interface CardProps {
  card: {
    name?: string;
    text?: string;
    img?: string;
    experience?: string;
    skills?: string[];
  };
}
function JobFeed(props: CardProps) {
  return (
    <div className="flex bg-primary flex-col rounded-md md:flex-row w-80 md:w-full my-5 py-10">
      <div className="flex flex-col items-center justify-center mr-10 ml-9">
        <div className="md:h-20 md:w-20  flex justify-center bg-white overflow-hidden text-center">
          <img src={props.card.img} className="" alt="" />
        </div>
      </div>
      <div className="md:text-left text-center">
        <h1 className="text-main font-medium">About</h1>
        <p className="text-main  text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id sociis
          enim sed etiam. Tristique accumsan mauris et volutpat id.
        </p>
        <div className="flex justify-between items-center flex-col md:flex-row mt-5">
          <p className="text-sm text-main">
            Experience Level: Less than 1 year
          </p>
          <div className="text-xs text-center pr-3 mt-5 md:mt-0">
            <Link
              className="py-2 ml-10  font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-4"
              to="/find-jobs"
            >
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobFeed;
