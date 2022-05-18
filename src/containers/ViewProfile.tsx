import { Link } from 'react-router-dom';
import ClericalWorker from '../assets/Clerical-Worker.png';
interface IProps {
  fullname: string;
  loading: boolean;
  convertedSkills: any;
}
export const ViewProfile = (props: IProps) => {
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" mt-1 hidden md:block sm:w-full flex-1  rounded-3xl overflow-hidden max-w-md  my-3 bg-white">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden  mt-8 bg-main ">
          <img
            src={ClericalWorker}
            className="object-fill h-20 w-20"
            alt="profile"
          />
        </div>
        <div className="text-center px-3 pb-6 pt-2 text-sm">
          <h3 className="text-main text-sm font-bold font-sans">
            {props.fullname}
          </h3>
          <p className="mt-2 font-sans font-bold text-md text-black">
            Experience Level: 1 year
          </p>
          <p className="mt-2 font-sans font-bold text-black">
            skills:
            {props.convertedSkills.map((items: any) => {
              if (items[1] !== '' && items[1] !== null) {
                return (
                  <div className="inline-block  ">
                    <small className="inline-block mx-2 employer-section">
                      {items[1]}
                    </small>
                  </div>
                );
              }
            })}
          </p>
          <Link to={'/profile'}>
            <button className="focus:outline-none text-main  bg-primary text-sm font-medium py-2 w-20 rounded mt-2">
              My Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
