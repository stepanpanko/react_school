import React from 'react';
import FreeCourse from '../assets/free course.png';

const Course = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='course' >
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mastering React for Business Dashboards</h1>
          <p>
          Welcome to our free course, "Mastering React for Business Dashboards." This course will equip you with the skills to create powerful and responsive business dashboards using React. Learn the fundamentals, advanced techniques, and best practices in React development. By the end, you'll have the knowledge to build feature-rich dashboards that can drive business insights.
          </p>
        </div>
        <img className='w-[500px] mx-auto my-4' src={FreeCourse} alt='/' />
      </div>
    </div>
  );
};

export default Course;