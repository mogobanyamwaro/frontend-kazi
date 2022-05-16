import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSkills, unsetAuthError } from '../../redux';
import { useAppSelector, useAppDispatch } from '../../redux/store';
function Skill() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState({
    Others: '',
    Hospitality: '',
    SalesAndMarketing: '',
    OfficeWorks: '',
    OnlineWork: '',
    Accounts: '',
    Procurements: '',
    IT: '',
    Engineering: '',
    Health: '',
    Education: '',
  });
  const [experience, setExperience] = useState({
    OthersExperience: '',
    HospitalityExperience: '',
    SalesAndMarketingExperience: '',
    OfficeWorksExperience: '',
    OnlineWorkExperience: '',
    AccountsExperience: '',
    ProcurementsExperience: '',
    ITExperience: '',
    EngineeringExperience: '',
    HealthExperience: '',
    EducationExperience: '',
  });

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSkills({ ...skills, [event.target.name]: event.target.value });
  };
  const handleExperienceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setExperience({ ...experience, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setLoading(true);

      const payload = { ...skills, Experience: { ...experience } };

      dispatch(createSkills(payload));
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Hospitality</p>
              <select
                name="Hospitality"
                onChange={handleChange}
                value={skills && skills.Hospitality}
                id="Hospitality"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="HouseHelp">House Help</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Nanny">Nanny</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                name="HospitalityExperience"
                onChange={handleExperienceChange}
                value={experience && experience.HospitalityExperience}
                id="HospitalityExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Sales and Marketing</p>
              <select
                name="SalesAndMarketing"
                id="SalesAndMarketing"
                value={skills && skills.SalesAndMarketing}
                onChange={handleChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="SocialMediaMarketing">
                  Social Media Marketing
                </option>
                <option value="DoorToDoorSales">Door to Door Sales</option>
                <option value="CommunitySalesPerson">
                  Community Sales Person
                </option>
                <option value="ContentCreator">Content Creator</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                name="SalesAndMarketingExperience"
                id="SalesAndMarketingExperience"
                value={experience && experience.SalesAndMarketingExperience}
                onChange={handleExperienceChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Office Works</p>
              <select
                name="OfficeWorks"
                id="OfficeWorks"
                value={skills && skills.OfficeWorks}
                onChange={handleChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="Secretarial">Secretarial</option>
                <option value="CustomerService">Customer Service</option>
                <option value="Receptionist">Receptionist</option>
                <option value="OfficeClerks">Office Clerks</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                name="OfficeWorksExperience"
                id="OfficeWorksExperience"
                value={experience && experience.OfficeWorksExperience}
                onChange={handleExperienceChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Online Works</p>
              <select
                name="OnlineWork"
                id="OnlineWork"
                value={skills && skills.OnlineWork}
                onChange={handleChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="WebsiteContent">Website Content</option>
                <option value="SEO">SEO</option>
                <option value="Copywriting">Copywriting</option>
                <option value="AcademicWriting">Academic Writing</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                name="OnlineWorkExperience"
                id="OnlineWorkExperience"
                value={experience && experience.OnlineWorkExperience}
                onChange={handleExperienceChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Accounts</p>
              <select
                name="Accounts"
                id="Accounts"
                value={skills && skills.Accounts}
                onChange={handleChange}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="AssetManagement">Asset Management</option>
                <option value="Accounts">Accounts</option>
                <option value="Auditing">Auditing</option>
                <option value="InventoryManagement">
                  Inventory Management
                </option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                value={experience && experience.AccountsExperience}
                onChange={handleExperienceChange}
                name="AccountsExperience"
                id="AccountsExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Procurement</p>
              <select
                value={skills && skills.Procurements}
                onChange={handleChange}
                name="Procurements"
                id="Procurements"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="Logistics">Logistics</option>
                <option value="Delivery">Delivery</option>
                <option value="LoadingAndOffloading">
                  Loading and Offloading
                </option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                value={experience && experience.ProcurementsExperience}
                onChange={handleExperienceChange}
                name="ProcurementsExperience"
                id="ProcurementsExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">IT</p>
              <select
                onChange={handleChange}
                value={skills && skills.IT}
                name="IT"
                id="IT"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="NetworkInstallation">
                  Network Installation
                </option>
                <option value="SoftwareDevelopment">
                  Software Development
                </option>
                <option value="WebDEvelopment">Web Development</option>
                <option value="SystemOperator">System Operator</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                value={experience && experience.ITExperience}
                onChange={handleExperienceChange}
                name="ITExperience"
                id="ITExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Engineering</p>
              <select
                value={skills && skills.Engineering}
                onChange={handleChange}
                name="Engineering"
                id="Engineering"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="Construction">Construction</option>
                <option value="ElectricalWorks">Electrical Works</option>
                <option value="MechanicalWorks">Mechanical Works</option>
                <option value="Capentry">Capentry</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                value={experience && experience.EngineeringExperience}
                onChange={handleExperienceChange}
                name="EngineeringExperience"
                id="EngineeringExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Health</p>
              <select
                value={skills && skills.Health}
                onChange={handleChange}
                name="Health"
                id="Health"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="Nursing">Nursing</option>
                <option value="Phamarcy">Phamarcy</option>
                <option value="Labaratory">Labaratory Works</option>
                <option value="FirstAid">First Aid</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                value={experience && experience.HealthExperience}
                onChange={handleExperienceChange}
                name="HealthExperience"
                id="HealthExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Education</p>
              <select
                name="Education"
                id="Education"
                onChange={handleChange}
                value={skills && skills.Education}
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="Tutors">Tutors</option>
                <option value="Teachers">Teachers</option>
                <option value="EducationalContentCreation">
                  Educational Content Creation
                </option>
                <option value="ECDeducation">ECD education</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                onChange={handleExperienceChange}
                value={experience && experience.EducationExperience}
                name="EducationExperience"
                id="EducationExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {' '}
        <div className="max-w-6xl mx-auto my-5 ">
          <div className="flex justify-between">
            <div>
              <p className="text-darkgray text-sm">Others</p>
              <select
                name="Others"
                onChange={handleChange}
                value={skills && skills.Others}
                id="Others"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Skill</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-sm">Experience Level</p>
              <select
                name="OthersExperience"
                onChange={handleExperienceChange}
                value={experience && experience.OthersExperience}
                id="OthersExperience"
                className="block px-16 py-1.5 text-base font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="">Select Range</option>
                <option value="ZeroToOne">0-1 years</option>
                <option value="OneToTwo">1-2 years</option>
                <option value="TwoToFour">2-4 years</option>
                <option value="FourToSeven">4-7 years</option>
                <option value="SevenPlus">7+ years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="relative my-3 text-white flex justify-center w-1/2 px-4 py-2 text-sm font-medium  rounded-md bg-secondary group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Skills
      </button>
    </form>
  );
}

export default Skill;
