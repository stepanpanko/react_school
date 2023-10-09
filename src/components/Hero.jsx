import React from 'react';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' id='hero'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING YOUR REACT SKILLS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Learn React easily.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Build interactive web applications
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Ready to dive in? Let's get started!</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={() => {
    const cardsSection = document.getElementById("course");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;