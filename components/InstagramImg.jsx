import Image from 'next/image';
import React from 'react';
import { BsCart } from 'react-icons/bs';

import Link from 'next/link';

const InstagramImg = ({ socialImg }) => {
  return (
    <>
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full'
        layout='responsive'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <Link href='/books_price'>
      <p className='text-gray-300 hidden group-hover:block'>
        <BsCart size={30} className='z-10' />
      </p></Link>
    
      

      </div>
      
    </div>
    
    </>
  );
};

export default InstagramImg;
