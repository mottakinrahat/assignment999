import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const{id,img,jobTitle,companyName,jobTime,jobType,location,salary,locationIcon,salaryIcon}=job
    return (
        <div className='object-cover border rounded mx-3 my-3 p-6'>
            <img src={img} alt="" className='h-[50px] w-[150px]'/>
            <div className='mr-[350px] mt-6 '>
            <h1 className='text-xl font-bold mb-2'>{jobTitle}</h1>
            <p>{companyName}</p>
            </div>
            <div className='flex mt-4 mb-4 ml-2'>
               <p className='border w-20 border-indigo-600 rounded mr-2'>{jobType}</p>
               <p className='border w-20 border-indigo-600 rounded'>{jobTime}</p>
            </div>
            <div className='flex'>
              <img src={locationIcon} alt=""  className='mr-2'/> 
              <p className='mr-2'>{location}</p>
              <img src={salaryIcon} alt="" className='mr-2' />
              <p>{salary}</p>
            </div>
            <Link to={`/jobDetails/${id}`}><button className='btn btn-primary text-white mt-4 mr-[400px] '>View Details</button></Link> 
        </div>
    );
};

export default JobCard;