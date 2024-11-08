'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComp: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src="/images/banner/1.png" alt="Banner 1" />
        </div>
        <div>
          <img src="/images/banner/2.png" alt="Banner 2" />
        </div>
        <div>
          <img src="/images/banner/3.png" alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
