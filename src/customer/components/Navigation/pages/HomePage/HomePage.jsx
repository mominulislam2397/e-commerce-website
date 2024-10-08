import React from 'react';
import MainCarousel from '../../HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../../HomeSectionCarousel/HomeSectionCarousel';

const HomePage = () => {
  return (
    <div>
      <MainCarousel></MainCarousel>

      <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel></HomeSectionCarousel>
      <HomeSectionCarousel></HomeSectionCarousel>
      <HomeSectionCarousel></HomeSectionCarousel>
      <HomeSectionCarousel></HomeSectionCarousel>
      <HomeSectionCarousel></HomeSectionCarousel>
      </div>
    </div>
  );
};

export default HomePage;