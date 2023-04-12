import React from 'react';

const JobCatagory = ({jobCat}) => {
    const{image,title,available_jobs}=jobCat;
    
    return (
        <div className='mt-20 bg-cyan-100 gap-4 w-[311px] h-[243px] mr-4 rounded-xl '>
            <img src={image} alt=""  className='bg-blue-200 p-2 rounded-xl m-[40px]'/>
            <h1 className='mt-[50px] text-xl font-bold'>{title}</h1>
            <p>{available_jobs}</p>
        </div>
    );
};

export default JobCatagory;