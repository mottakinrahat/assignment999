import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentMarks = [
        { assignmentNo: "1st", mark: 57 },
        { assignmentNo: "2nd", mark: 60 },
        { assignmentNo: "3rd", mark: 60 },
        { assignmentNo: "4th", mark: 60 },
        { assignmentNo: "5th", mark: 60 },
        { assignmentNo: "6th", mark: 57 },
        { assignmentNo: "7th", mark: 60 },
        { assignmentNo: "8th", mark: 57 }
      ];
      
    return (
        <div className='md:ml-80 md:mt-20'>
           <AreaChart    width={500}
           height={300}
           data={assignmentMarks}>
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignmentNo" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
     
           </AreaChart>
        </div>
    );
};

export default Statistics;<h1>This is my stat</h1>