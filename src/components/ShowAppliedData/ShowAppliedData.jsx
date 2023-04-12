import React from 'react';
import { Link } from 'react-router-dom';

const ShowAppliedData = ({job}) => {
    console.log(job);
    const{img,jobTitle,companyName,jobType,jobTime,location,salary,locationIcon,salaryIcon,id}=job
    return (
        <>
         
       
        <div className='flex justify-between  border rounded px-20 py-10 mb-5'>
          <div> <img src={img} alt=""  className='h-[90px] w-[240px] p-2'/></div>
           <div>
           <h1 className='text-xl font-bold'>{jobTitle}</h1>
           <h1>{companyName}</h1>
           <div className='flex mt-2 text-center'>
               <p className='border w-20 border-indigo-600 rounded mr-2 '>{jobType}</p>
               <p className='border w-20 border-indigo-600 rounded'>{jobTime}</p>
            </div>
            <div className='flex mt-4'>
              <img src={locationIcon} alt=""  className='mr-2'/> 
              <p className='mr-2'>{location}</p>
              <img src={salaryIcon} alt="" className='mr-2' />
              <p>{salary}</p>
            </div>
           </div>
           <div>
           <Link to={`/jobDetails/${parseInt(id)}`}> <button className='btn btn-primary text-white mt-10'>View Details</button></Link>
           </div>
        </div>
        </>
        
    );
};

export default ShowAppliedData;