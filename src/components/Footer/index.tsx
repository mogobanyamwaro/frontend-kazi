import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const date: number = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-primary m-0 pb-8">
      <div className="flex justify-around h-72 items-center">
        <div className="flex flex-col items-center justify-center h-72">
          <h1 className="text-main font-bold text-2xl mb-4 ">
            Get Connected Today
          </h1>
          <Link
            className="py-2 mt-6 font-thin text-white capitalize bg-secondary rounded hover:bg-primary font-[Poppins] px-4"
            to="/find-jobs"
          >
            Register
          </Link>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h1 className="my-2 text-main font-medium text-sm">
            Follow us on social media:{' '}
          </h1>
          <p className="my-2 text-main font-medium text-sm">Facebook</p>
          <p className="my-2 text-main font-medium text-sm">Twiter</p>
          <p className="my-2 text-main font-medium text-sm">Instagram</p>
        </div>
      </div>
      <div className="text-right pr-10">
        <p className="text-main font-thin">Copyright © SAIDIA NA KAZI {date}</p>
      </div>
    </footer>
  );
};

export default Footer;
