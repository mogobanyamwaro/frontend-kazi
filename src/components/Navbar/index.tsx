import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { useToken } from '../../hooks/useToken';
import { logout, unsetToken, unsetUser } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../redux/store';

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

        <li>
          <Link
            className="text-l font-medium cursor-pointer text-primary font-[Poppins] px-6"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-l font-thin cursor-pointer text-primary font-[Poppins] px-6"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="py-3 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-6"
            to="/find-jobs"
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
