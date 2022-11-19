import React from 'react';
import Link from 'next/link';


const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center text-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-5rem]'>
        <h1 className='text-7xl font-bold'>{heading}</h1>
        <br />
        {<h2>Smart &#124; Secure &#124; Simple</h2>}
        <p className='py-5 text-xl'>{message}</p>
       
         
        {/* <button className=''> */}
        <button class="btn-17">
  <span class="text-container">
    <span class="text">
      <Link href='books_price'>
      Buy
      </Link>
      </span>
  </span>
</button>

          
      </div>
    </div>
  );
};

export default Hero;
