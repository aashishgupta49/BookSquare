import React from 'react'
import IgImg1 from '../public/best_selling/a.png';
import IgImg2 from '../public/best_selling/b.png';
import IgImg3 from '../public/best_selling/c.png';
import IgImg4 from '../public/best_selling/d.png';
import IgImg5 from '../public/best_selling/e.png';
import IgImg6 from '../public/best_selling/f.png';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <>
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Best Selling Books</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
    </>
  )
}

export default Instagram