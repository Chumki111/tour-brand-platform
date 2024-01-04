
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import Lottie from "lottie-react";
import shopAnimation from '../../../../public/Animation - 1704333661162.json';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import Aos from 'aos';


const Banner = () => {
  const job = [" Welcome Back To Brand Tour"];
  useEffect(() =>{
    Aos.init()
  },[])
  
  return (
    <div className='md:h-[500px] h-full'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex flex-col md:flex-row items-center justify-around  gap-5'>
            <div className='md:mt-16 mt-10 md:pl-10 pl-12' data-aos="fade-right">
              <h1 className='md:text-3xl text-2xl font-bold py-3'>
              <Typewriter words={job} loop={20} cursor/></h1>
              <p className='max-w-md'>Embark on a journey through the most coveted brands and collections from around the globe, all in one virtual destination. Whether you`re a fashion enthusiast, a tech-savvy individual, or someone seeking unique lifestyle products, our platform offers an exclusive tour of top-tier brands, bringing you closer to the latest trends, timeless classics, and innovative creations.</p>
              <button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-black shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-gray-200 relative inline-block font-semibold">Explore</button>
            </div>
            <div className='lg:w-1/2' data-aos="fade-left">
              <Lottie animationData={shopAnimation} className='w-full' />
            </div>
          </div>

        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
