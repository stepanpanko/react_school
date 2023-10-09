import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { AiOutlineVerticalAlignTop} from 'react-icons/ai'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id='cards'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Standard Package</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>- 40 Hours of Instruction</p>
              <p className='py-2 border-b mx-8'>- Beginner to Intermediate Level</p>
              <p className='py-2 border-b mx-8'>- Access to Learning Resources</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Premium Package</h2>
              <p className='text-center text-4xl font-bold'>$369</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>- 80 Hours of Instruction</p>
                  <p className='py-2 border-b mx-8'>- Personal Mentor Training</p>
                  <p className='py-2 border-b mx-8'>- Access to Premium Resources</p>
                  <p className='py-2 border-b mx-8'>- Build 3 Projects for your Portfolio</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-2'>Premium Package Mulitiple students</h2>
              <p className='text-center text-4xl font-bold'>$229</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>- Get same offers as in Premium Package</p>
                  <p className='py-2 border-b mx-8'>- Discounted group rate for 3+ People</p>
                  <p className='py-2 border-b mx-8'>- Build Group Project for Portfolio</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <a href="#hero" className="text-[#383b3a] font-medium text-lg hover:underline mt-10" >
  <span style={{ display: 'inline-block', marginRight: '8px' }}>
    Back to Top
  </span>
  <AiOutlineVerticalAlignTop size={30} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
</a>
      </div>
    </div>
  );
};

export default Cards;