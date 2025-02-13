import React from 'react';
import { Banner } from './Banner';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Banner />
      {/* Content */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 p-8'>
        <Image
          src={'/budgetpic.png'}
          width={350}
          height={350}
          alt='budget pic'
        />
        <article className=''>
          <h1 className='text-3xl font-bold mb-4'>Budgeting Made Easy</h1>
          <p className='text-left'>
            Take control of your financial future with our intuitive budget app.
            Track expenses effortlessly, set smart savings goals, and watch your
            wealth grow—all from the palm of your hand. Stop wondering where
            your money goes, and start knowing exactly where it should be. Your
            journey to financial freedom begins with a single tap.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Hero;
