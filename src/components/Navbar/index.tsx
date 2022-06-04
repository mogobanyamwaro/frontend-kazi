import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { useToken } from '../../hooks/useToken';
import { logout, unsetToken, unsetUser } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import MobileNav from './MobileNav';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useAppDispatch();
  const tokens = useToken();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(unsetToken());
    await dispatch(unsetUser());
    localStorage.removeItem('token');
    navigate('/');
  };
  console.log(tokens);
  return (
    <nav className="absolute w-full py-1 z-20 ">
      <ul className="flex items-center justify-between max-w-6xl mx-auto">
        <li className="flex items-center">
          <img src={Logo} alt="" className="h-14 w-14" />
          <h1 className="text-white ml-2">
            Get <br /> Manpower
          </h1>
        </li>
        <svg
          className="w-8 h-8 mx-2 text-2xl cursor-pointer mr-16 fill-primary md:hidden "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={() => setShowNav(!showNav)}
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
        <MobileNav
          handleLogout={handleLogout}
          tokens={tokens}
          showNav={showNav}
        />

        <li className="hidden md:block">
          <Link
            className="text-l font-medium cursor-pointer text-primary font-[Poppins] px-6"
            to="#"
          >
            About
          </Link>
          <Link
            className="text-l font-thin cursor-pointer text-primary font-[Poppins] px-6"
            to="#"
          >
            Contact
          </Link>
          <Link
            className="py-3 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-6"
            to="/employee"
          >
            Find Jobs
          </Link>
          {tokens ? (
            <button
              type="button"
              className="py-3 font-thin text-main capitalize bg-secondary rounded hover:bg-primary font-[Poppins] ml-4 px-6"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                className="py-3 font-thin text-main capitalize bg-secondary rounded hover:bg-primary font-[Poppins] ml-4 px-6"
                to="/register"
              >
                Register
              </Link>
              ;
              <Link
                className="py-3 font-thin text-main capitalize bg-secondary rounded hover:bg-primary font-[Poppins] ml-4 px-6"
                to="/login"
              >
                Sign In
              </Link>
              ;
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
