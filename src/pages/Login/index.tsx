import React, { useState } from 'react';
import LoginForm from '../../components/Login/LoginForm';
import Logo from '../../assets/Logo.png';

function Login() {
  return (
    <div>
      {' '}
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow">
          <div className="flex items-center justify-center min-h-full px-4 py-12 mt-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <img
                  className="w-auto h-12 mx-auto"
                  src={Logo}
                  alt="Workflow"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-center text-main font-[Poppins]">
                  Sign In
                </h2>
              </div>

              <LoginForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default React.memo(Login);
