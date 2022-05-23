import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

interface IProps {
  jobData: any;
  handleChange: (e: any) => void;
}

function EmployerSkill(props: IProps) {
  const navigate = useNavigate();
  const { jobData, handleChange } = props;

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  return (
    <form className=" md:pl-0 w-80 md:w-full">
      <div>
        {' '}
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full   ">
          <div className="flex justify-between flex-col md:flex-row my-10 md:my-0">
            <div>
              <p className="text-darkgray text-xs w-32">Hospitality</p>
              <select
                name="Hospitality"
                onChange={props.handleChange}
                value={props.jobData.skills && props.jobData.skills.Hospitality}
                id="Hospitality"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="HouseHelp">House Help</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Nanny">Nanny</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                name="HospitalityExperience"
                onChange={props.handleChange}
                value={
                  props.jobData.experience &&
                  props.jobData.experience.HospitalityExperience
                }
                id="HospitalityExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Sales and Marketing</p>
              <select
                name="SalesAndMarketing"
                id="SalesAndMarketing"
                value={
                  props.jobData.skills && props.jobData.skills.SalesAndMarketing
                }
                onChange={props.handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
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
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                name="SalesAndMarketingExperience"
                id="SalesAndMarketingExperience"
                value={
                  props.jobData.experience &&
                  props.jobData.experience.SalesAndMarketingExperience
                }
                onChange={props.handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Office Works</p>
              <select
                name="OfficeWorks"
                id="OfficeWorks"
                value={props.jobData.skills && props.jobData.skills.OfficeWorks}
                onChange={handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="Secretarial">Secretarial</option>
                <option value="CustomerService">Customer Service</option>
                <option value="Receptionist">Receptionist</option>
                <option value="OfficeClerks">Office Clerks</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                name="OfficeWorksExperience"
                id="OfficeWorksExperience"
                value={
                  jobData.experience && jobData.experience.OfficeWorksExperience
                }
                onChange={handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Online Works</p>
              <select
                name="OnlineWork"
                id="OnlineWork"
                value={jobData.skills && jobData.skills.OnlineWork}
                onChange={handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="WebsiteContent">Website Content</option>
                <option value="SEO">SEO</option>
                <option value="Copywriting">Copywriting</option>
                <option value="AcademicWriting">Academic Writing</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                name="OnlineWorkExperience"
                id="OnlineWorkExperience"
                value={
                  jobData.experience && jobData.experience.OnlineWorkExperience
                }
                onChange={handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Accounts</p>
              <select
                name="Accounts"
                id="Accounts"
                value={jobData.skills && jobData.skills.Accounts}
                onChange={handleChange}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="AssetManagement">Asset Management</option>
                <option value="Accounts">Accounts</option>
                <option value="Auditing">Auditing</option>
                <option value="InventoryManagement">
                  Inventory Management
                </option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                value={
                  jobData.experience && jobData.experience.AccountsExperience
                }
                onChange={handleChange}
                name="AccountsExperience"
                id="AccountsExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Procurement</p>
              <select
                value={jobData.skills && jobData.skills.Procurements}
                onChange={handleChange}
                name="Procurements"
                id="Procurements"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="Logistics">Logistics</option>
                <option value="Delivery">Delivery</option>
                <option value="LoadingAndOffloading">
                  Loading and Offloading
                </option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                value={
                  jobData.experience &&
                  jobData.experience.ProcurementsExperience
                }
                onChange={handleChange}
                name="ProcurementsExperience"
                id="ProcurementsExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">IT</p>
              <select
                onChange={handleChange}
                value={jobData.skills && jobData.skills.IT}
                name="IT"
                id="IT"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
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
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                value={jobData.experience && jobData.experience.ITExperience}
                onChange={handleChange}
                name="ITExperience"
                id="ITExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Engineering</p>
              <select
                value={jobData.skills && jobData.skills.Engineering}
                onChange={handleChange}
                name="Engineering"
                id="Engineering"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="Construction">Construction</option>
                <option value="ElectricalWorks">Electrical Works</option>
                <option value="MechanicalWorks">Mechanical Works</option>
                <option value="Capentry">Capentry</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                value={
                  jobData.experience && jobData.experience.EngineeringExperience
                }
                onChange={handleChange}
                name="EngineeringExperience"
                id="EngineeringExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Health</p>
              <select
                value={jobData.skills && jobData.skills.Health}
                onChange={handleChange}
                name="Health"
                id="Health"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="Nursing">Nursing</option>
                <option value="Phamarcy">Phamarcy</option>
                <option value="Labaratory">Labaratory Works</option>
                <option value="FirstAid">First Aid</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                value={
                  jobData.experience && jobData.experience.HealthExperience
                }
                onChange={handleChange}
                name="HealthExperience"
                id="HealthExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Education</p>
              <select
                name="Education"
                id="Education"
                onChange={handleChange}
                value={jobData.skills && jobData.skills.Education}
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="Tutors">Tutors</option>
                <option value="Teachers">Teachers</option>
                <option value="EducationalContentCreation">
                  Educational Content Creation
                </option>
                <option value="ECDeducation">ECD education</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                onChange={handleChange}
                value={
                  jobData.experience && jobData.experience.EducationExperience
                }
                name="EducationExperience"
                id="EducationExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
        <div className="max-w-2xl mx-auto my-5 w-96 md:w-full ">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <p className="text-darkgray text-xs">Others</p>
              <select
                name="Others"
                onChange={handleChange}
                value={jobData.skills && jobData.skills.Others}
                id="Others"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
      transition
      ease-in-out focus:text-gray-700 focus:bg-white focus:border-white focus:outline-none"
                aria-label="Default select example
      m-0"
              >
                <option value="" className="text-xs">
                  Select Skill
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <p className="text-darkgray text-xs">Experience Level</p>
              <select
                name="OthersExperience"
                onChange={handleChange}
                value={
                  jobData.experience && jobData.experience.OthersExperience
                }
                id="OthersExperience"
                className="md:block px-16 py-1.5 text-xs font-normal text-lightgray  bg-white bg-clip-padding bg-no-repeat shadow-md  border-8 border-solid border-white  rounded
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
    </form>
  );
}

export default EmployerSkill;
