import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import RegisterForm from '../../components/SignUp';

const Register = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <div className="flex items-center justify-center min-h-full px-4 py-12 mt-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img className="w-auto h-12 mx-auto" src={Logo} alt="Workflow" />
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
                  role="tablist"
                >
                  <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 1
                          ? 'text-white bg-primary'
                          : 'text-primary bg-white')
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Employee Registration
                    </a>
                  </li>
                  <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 2
                          ? 'text-white bg-primary'
                          : 'text-primary bg-white')
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Employers Registration
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? 'block' : 'hidden'}
                        id="link1"
                      >
                        <RegisterForm />
                      </div>
                      <div
                        className={openTab === 2 ? 'block' : 'hidden'}
                        id="link2"
                      >
                        <RegisterForm isEmployer={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
