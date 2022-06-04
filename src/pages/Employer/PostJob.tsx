import React, { ChangeEvent, useState } from 'react';
import DashboardHeader from '../../components/Navbar/Dashboard';
import PersonIcon from '../../assets/person.png';
import Farmer from '../../assets/Farmers.png';
import EmployerSkill from './EmployerSkills';
import { string } from 'yup';
import UserService from '../../redux/store/user/user.service';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { createJob } from '../../redux/store/jobs';
function PostJob() {
  const [step, setStep] = React.useState(1);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  const [emplyerfile, setFile] = React.useState<File>();
  const [filePreview, setFilePreview] = useState('');
  const navigate = useNavigate();
  const [moveNext, setMoveNext] = useState(false);
  const [jobData, setJobData] = React.useState({
    title: '',
    description: '',
    fileUrl: '',
    skills: {
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
    },
    experience: {
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
    },
  });
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      // @ts-ignore
      formData.append('file', emplyerfile, emplyerfile.name);

      const data = await UserService.uploadFile(formData);

      jobData.fileUrl = data.url;
      const payload = {
        description: jobData.description,
        title: jobData.title,
        fileUrl: jobData.fileUrl,
      };
      setLoading(false);
      dispatch(createJob(payload));
      console.log(payload);
      navigate('/');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(1);
    }
  };

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFilePreview(URL.createObjectURL(e.target.files[0]));
    // @ts-ignore
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        // @ts-ignore
      }
    };
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    if (step < 3) {
      if (
        jobData.description === '' ||
        jobData.title === '' ||
        emplyerfile === undefined
      ) {
        alert('Please fill all the fields');
      }
      setMoveNext(true);
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  const handleEdit = () => {
    setStep(1);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <DashboardHeader isProfile={true} />
      <div className="pt-5">
        <div className="flex justify-between w-7/12 flex-col md:flex-row mx-auto md:border-b-2 md:border-primary ">
          <div
            className={` mb-3 md:mb-0 ${
              step === 1 ? 'border-secondary border-b-4' : 'border-b-0'
            }`}
            onClick={() => setStep(1)}
          >
            {' '}
            <h1 className={`${step === 1 ? 'text-green' : 'text-secondary'}`}>
              Description
            </h1>
          </div>
          <div
            className={` mb-3 md:mb-0 ${
              step === 2 ? 'border-secondary border-b-4' : 'border-b-0'
            }`}
            onClick={() => setStep(2)}
          >
            <h1
              className={`${
                step === 2 && moveNext === true
                  ? 'text-green'
                  : 'text-secondary'
              }`}
            >
              Skills
            </h1>
          </div>
          <div
            className={` ${
              step === 3 ? 'border-secondary border-b-4' : 'border-b-0'
            }`}
            onClick={() => setStep(3)}
          >
            <h1 className={`${step === 3 ? 'text-green' : 'text-secondary'}`}>
              {' '}
              Review and post
            </h1>
          </div>
        </div>
        {step === 1 && (
          <Description
            onFileChange={onFileChange}
            jobData={jobData}
            handleChange={handleChange}
          />
        )}
        {step === 2 && (
          <EmployerSkill jobData={jobData} handleChange={handleChange} />
        )}
        {step === 3 && (
          <Review
            loading={loading}
            handleEdit={handleEdit}
            image={filePreview}
            description={jobData.description}
            handleSubmit={handleSubmit}
          />
        )}

        <div className={`mb-16 flex justify-between ${step === 3 && 'hidden'}`}>
          <button
            onClick={handlePrev}
            className={`py-2 mt-6 font-thin text-white capitalize 
         bg-secondary rounded font-[Poppins] px-4 ${
           step === 1 && 'disabled bg-gray'
         }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="py-2 mt-6 font-thin text-white capitalize 
         bg-green rounded font-[Poppins] px-5"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;

interface DescriptionProps {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  jobData: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Description(props: DescriptionProps) {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="my-16">
        <h1 className="text-base text-center font-bold">
          Create a job post that employees will see
        </h1>
      </div>
      <div>
        <h1 className="my-7">Job Title</h1>
        <input
          name="title"
          required
          value={props.jobData.title}
          onChange={props.handleChange}
          className=" bg-gray relative
           block rounded-md px-3 py-2 w-5/12 text-gray-900
            placeholder-gray-500  
             focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm "
        />
      </div>
      <div className="flex justify-between md:flex-row flex-col md:items-center">
        <div>
          <h1 className="my-7">Give a brief desciption about the job</h1>
          <input
            name="description"
            required
            value={props.jobData.description}
            onChange={props.handleChange}
            className=" bg-gray relative
           block w-full px-3 py-7 text-gray-900
           rounded-md
            placeholder-gray-500  
             focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm "
          />
        </div>
        <div>
          <h1 className="my-7">Attach image file</h1>
          <input
            name="file"
            type="file"
            required
            onChange={props.onFileChange}
            className=" bg-gray relative
           block w-full px-3 py-2 text-gray-900
            placeholder-gray-500  rounded-md
             focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm "
          />
        </div>
      </div>
    </div>
  );
}

interface IProps {
  handleEdit: () => void;
  image?: string;
  description?: string;
  handleSubmit: () => void;
  loading: boolean;
}

function Review(props: IProps) {
  return (
    <div>
      <div className="my-16">
        <h1 className="text-sm font-bold text-center ">
          This is how your post will look like:{' '}
        </h1>
      </div>
      <div className="flex bg-primary text-main text-sm">
        <div className="w-full flex md:block md:w-auto ">
          <img src={props.image} className="md:w-56 object-cover " alt="" />
        </div>
        <div className="flex flex-col justify-center  ml-3">
          <h1>{props.description}</h1>
          <div className="flex justify-between md:w-6/12">
            <p>Experience Level:</p>
            <p> Less than 1 year</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={props.handleEdit}
          className="py-2 mt-6 font-thin text-white capitalize 
         bg-secondary rounded w-2/12 font-[Poppins] px-4"
        >
          Edit
        </button>
        <button
          {...(props.loading ? 'disabled' : '')}
          onClick={props.handleSubmit}
          className="py-2 mt-6 font-thin text-white capitalize 
         bg-green rounded w-2/12 font-[Poppins] px-4"
        >
          Post
        </button>
      </div>
    </div>
  );
}
