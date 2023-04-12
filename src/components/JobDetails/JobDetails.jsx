import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
  const [items, setItems] = useState([]);
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('/job.json')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    const foundItem = items.find((item) => parseInt(item.id) === parseInt(id));
    setSingleData(foundItem || {});
  }, [items, id]);
console.log(singleData);

 const{companyName,jobDescription,jobResponsibility,educationalRequirement,experience,salary
 ,jobTitle, phone,email,location,salaryIcon,titleIcon,phoneIcon,emailIcon,locationIcon}=singleData;

const AddData=(product)=>{
  console.log(id);
  addToDb(product.id)
  
}
  return (
    <>
    <h2 className='text-2xl font-bold text-center mb-10 mt-10'>Job Details</h2>
        <div className='flex justify-between'>
      <div className='w-4/6 p-5'>
       <h1><span className=' font-bold'>Job Description: </span>{jobDescription}</h1>
       <h1 className='mt-10'><span className=' font-bold'>Job Responsibility: </span>{jobResponsibility}</h1>
       <h1 className='mt-10'><span className=' font-bold'>Educational Requirements: </span>{educationalRequirement}</h1>
       <h1 className='mt-10'><span className=' font-bold'>Experiences: </span>{experience}</h1>
      </div>

        
        <div className=' w-2/6 '>
            
        
      <div className=' bg-cyan-100 p-5 rounded-xl'>
       <h1 className=' text-center font-bold'>Job Details</h1>
       <hr/>
       <div className='flex mt-10'><img src={salaryIcon} alt="" className='' /><h1 className=''><span className=' font-bold'>Salary: </span>{salary}</h1></div> 
      <div className='flex mt-5 mb-5'> <img src={titleIcon} alt="" /> <h1 className=''><span className=' font-bold'>Job Title: </span>{jobTitle}</h1></div>

       <h1 className=' font-bold'>Contact Information</h1>
       <hr/>
      <div  className='flex mt-5'> <img src={phoneIcon} alt="" /> <h1 className=''><span className=' font-bold'>Phone: </span>{phone}</h1></div>
      <div  className='flex mt-5'> <img src={emailIcon} alt="" /><h1 className=''><span className=' font-bold'>Email: </span>{email}</h1></div>
       <div className='flex mt-5'> <img src={locationIcon} alt="" /><h1 className=''><span className=' font-bold'>Address: </span>{location}</h1></div>
       </div>
       <div className='text-center mt-10'>
       <button onClick={()=>AddData(singleData)}  className='btn btn-primary text-white w-80'>
        Apply Now
       </button>
       </div>
      
      </div>
     
    </div>
    </>

  
  );
};

export default JobDetails;
