import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedData from './components/AppliedData/AppliedData';
import jobProductsLoader from './Loaders/jobProductLoader';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('/job.json')
        
      },
      {
          path:'/jobDetails/:id',
          element: <JobDetails/>,
         
      },
      {
          path:'/appliedData',
          element: <AppliedData/>,
          loader: jobProductsLoader
         
      },
      {
          path:'/statistics',
          element: <Statistics/>,
         
         
      },
      {
          path:'/blog',
          element: <Blog/>,
         
         
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
