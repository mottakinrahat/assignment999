import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='bg-blue-500 mb-5 rounded-xl p-5 text-white'>
            <h1 className='text-2xl font-semibold'>1.When Should use Context API?</h1>
            <p><span className='text-xl font-semibold'>Ans:</span> Context API is  used when some data needs to be accessible by many components at different nesting levels. </p>
        </div>
            <div  className='bg-yellow-400 mb-5 rounded-xl p-5'>
            <h1 className='text-2xl font-semibold'>2.What is custom hook?</h1>
            <p><span className='text-xl font-semibold'>Ans:</span>  A custom hook is a reusable function in React that allows you to encapsulate and reuse stateful logic across multiple components in application. </p>
        </div>
            <div  className='bg-green-500 mb-5 rounded-xl p-5'>
            <h1 className='text-2xl font-semibold'>3.What is useRef?</h1>
            <p> <span className='text-xl font-semibold'>Ans:</span>  useRef is a built-in hook in React that allows you to create a mutable reference to an element or value that persists across renders. </p>
        </div>
            <div  className='bg-red-500 mb-5 rounded-xl p-5 text-white'>
            <h1 className='text-2xl font-semibold'>4.What is useMemo?</h1>
            <p><span className='text-xl font-semibold'>Ans:</span>  useMemo is a React Hook that is used to optimize the performance of a React application by memoizing the result of a function and returning it when the input values are the same. The main purpose of useMemo is to avoid unnecessary re-rendering of components by caching the result of an expensive computation until the input values have changed.</p>
        </div>
        </div>
    );
};

export default Blog;