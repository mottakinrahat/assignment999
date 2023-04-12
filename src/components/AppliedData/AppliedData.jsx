import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedData from '../ShowAppliedData/ShowAppliedData';

const AppliedData = () => {
    const jobData=useLoaderData();

    const [apply,setApply]=useState(jobData)
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-10 mt-10'>Applied Job</h2>
           <div className='flex justify-end mb-5'> <button className='btn btn- mr-5'>Show Remote jobs</button><button className='btn btn-'>Show onsite jobs</button></div>
        {
            apply.map(job=><ShowAppliedData job={job} key={job.id}/>)
        }
        </div>
    );
};

export default AppliedData;