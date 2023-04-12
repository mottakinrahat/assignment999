import React, { useEffect, useLayoutEffect, useState } from 'react';


import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from 'react-router-dom'
import JobCatagory from './JobCatagory/JobCatagory';
import JobCard from '../JobCard/JobCard';


const Home = () => {
    const jobData=useLoaderData()
    
    const[data,setData]=useState([])
    const[showAll,setShowAll] = useState(false)
 

    useEffect(() => {
        fetch('/jobCatagory.json')
          .then(response => response.json())
          .then(data=>setData(data))
      }, []);

    return (
        <>
        <div className='my-container flex flex-col items-center justify-between lg:flex-row '>'
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8 '>
          <h2 className='text-6xl font-bold'>
            One Step Closer to your
            <span className='inline-block text-blue-400'>Dream Jobs</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg mt-5'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
        <button className='btn btn-primary text-white'>Get Started</button>
         
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <img src="employee.png" alt="" />
        </div>
      </div>

    </div>

    <section className='mt-[150px] text-center'>
    <h1 className='text-4xl font-bold mb-5'>Job Category list</h1>
            <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='md:flex justify-between px-5'>
            {
                data.map(jobCat=><JobCatagory jobCat={jobCat} key={jobCat.id}/>)
            }
          
        </div>
    </section>

    <section className='mt-[150px] text-center'>
    <h1 className='text-4xl font-bold mb-5'>Featured Jobs</h1>
            <p className='text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2'>
                {
                    jobData.slice(0,showAll?6:4).map(job=><JobCard job={job} key={job.id}/>)
                }
            </div>
    </section>
    <div className='text-center'>
    {
            !showAll && <span style={{display:'inline-block'}} onClick={setShowAll}>
            <button className='btn btn-primary text-white'>Show All</button>
            </span>
        }
    
    </div>
    </>
    );
};

export default Home;