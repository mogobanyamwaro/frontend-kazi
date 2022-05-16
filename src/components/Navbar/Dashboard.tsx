import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../../assets/Home.png';
import Message from '../../assets/Message.png';
import MyJob from '../../assets/MyJobs.png';
import Notification from '../../assets/notifications.png';
import { unsetToken, unsetUser } from '../../redux';
import { useAppDispatch } from '../../redux/store';
interface Iprops {
  isProfile?: boolean;
}
const DashboardHeader = (props: Iprops) => {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <nav
      className={`flex items-center w-full py-0 mx-auto ${
        props.isProfile ? 'bg-white' : 'employer-section'
      } sm:mb-10 `}
    >
      <div className="flex py-2 mx-4 space-x-4 shrink-0 ">
        <Link to={'/'}>
          <img className="w-12 h-12 " src={Logo} alt="Kazi Logo" />
        </Link>
        <h2>
          Saidia
          <br />
          Na
          <br />
          Kazi
        </h2>
      </div>
      <ul
        className={
          (showNav
            ? 'absolute left-0 top-14 bg-white z-20 w-full m-2 p-0 '
            : '-left-full') +
          ' md:static fixed items-center justify-end flex-1  text-xs md:z-auto z-[-1]  md:flex md:space-x-7    md:space-y-0 space-y-5 p-2 transition-left gap-4 right-10'
        }
      >
        <Link to={'/'} onClick={() => setShowNav(!showNav)}>
          <div className="flex space-x-2">
            <img src={Home} alt="Home" className="w-5 h-5" />
            <li className="text-sm font-medium cursor-pointer text-secondary font-[Poppins]">
              Home
            </li>
          </div>
        </Link>
        <Link to={'/messages'} onClick={() => setShowNav(!showNav)}>
          <div className="flex space-x-2">
            <img src={Message} alt="Message" className="w-5 h-5" />
            <li className="text-sm font-medium cursor-pointer text-secondary font-[Poppins]">
              Message
            </li>
          </div>
        </Link>
        <Link to={'/my-job-offers'} onClick={() => setShowNav(!showNav)}>
          <div className="flex space-x-2">
            <img src={MyJob} alt="My-Jobs" className="w-5 h-5" />
            <li className="text-sm font-medium cursor-pointer text-secondary font-[Poppins]">
              My Job Offers
            </li>
          </div>
        </Link>
        <div className="flex content-between gap-2 ">
          <Link to={'/signin'} onClick={() => setShowNav(!showNav)}>
            <div className="flex ">
              <img src={Notification} alt="Home" className="w-5 h-5" />
              <li className="text-sm font-medium cursor-pointer text-secondary font-[Poppins]">
                Notifications
              </li>
            </div>
          </Link>

          <button
            type="button"
            onClick={async () => {
              dispatch(unsetToken());
              localStorage.removeItem('token');
              dispatch(unsetUser());
              navigate('/login');
            }}
            className="px-2 py-3 font-bold text-main  bg-secondary rounded hover:bg-primary font-[Poppins]"
          >
            Sign Out
          </button>
        </div>
      </ul>
      <div
        className="flex justify-end flex-1 md:hidden"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <svg
          className="w-8 h-8 mx-2 text-2xl cursor-pointer "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </div>
    </nav>
  );
};

export default DashboardHeader;
