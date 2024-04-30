import React from 'react';
import { Link } from 'react-router-dom';

// import Style CSs
import './style/Testimonial.css'

// import icons ui 
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


// import imges
import imge1 from '../../img/testimonial-1.jpg'
import imge2 from '../../img/testimonial-2.jpg'
import imge3 from '../../img/testimonial-3.jpg'

// import Swiper 
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const Testimonial = () => {




    return (
        <>
            <div className="Testimonial bg-blue-50 ">
                <div className='w-11/12 Main-Testimonial grid grid-cols-1 lg:grid-cols-2 py-20'>
                    <div className="left p-10">
                        <button className="btn border py-2 px-6 rounded-3xl text-blue-800">Our Team</button>
                        <h4 className=' py-7 text-4xl text-black font-extrabold'>
                            Meet Our Experienced Team Members
                        </h4>
                        <div className="brg">
                            <p className=' text-gray-500 mb-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                        </div>
                        <div className="flex gap-4">
                            <Link className=' border rounded-3xl h-14 w-40 flex items-center justify-center bg-blue-800 text-white mt-4 block' to=''>Read More</Link>
                        </div>
                    </div>
                    <div className="rigth  p-10 relative">
                        <Swiper 
                        navigation={true} 
                        modules={[Navigation]} 
                        loop={true}
                        className="mySwiper">
                            <SwiperSlide>
                                <div className="icon">
                                    <FormatQuoteIcon sx={{ fontSize: '60px', color: '#1f1fef' }} />
                                </div>
                                <p className='text-2xl text-gray-600 font-sans leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque facere laborum ratione, eveniet ipsa officiis unde quaerat eaque autem repudiandae necessitatibus quae ex voluptas voluptate molestias consequuntur in. Perferendis!</p>
                                <div className="box-user flex items-center mt-3">
                                    <img className='rounded-full w-16 h-16 mr-5' src={imge1} alt="" />
                                    <div className="text leading-7">
                                        <h6 className='text-xl'>Client Name</h6>
                                        <p className='text-gray-500'>Profession</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="icon">
                                    <FormatQuoteIcon sx={{ fontSize: '60px', color: '#1f1fef' }} />
                                </div>
                                <p className='text-2xl text-gray-600 font-sans leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque facere laborum ratione, eveniet ipsa officiis unde quaerat eaque autem repudiandae necessitatibus quae ex voluptas voluptate molestias consequuntur in. Perferendis!</p>
                                <div className="box-user flex items-center mt-3">
                                    <img className='rounded-full w-16 h-16 mr-5' src={imge2} alt="" />
                                    <div className="text leading-7">
                                        <h6 className='text-xl'>Client Name</h6>
                                        <p className='text-gray-500'>Profession</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="icon">
                                    <FormatQuoteIcon sx={{ fontSize: '60px', color: '#1f1fef' }} />
                                </div>
                                <p className='text-2xl text-gray-600 font-sans leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque facere laborum ratione, eveniet ipsa officiis unde quaerat eaque autem repudiandae necessitatibus quae ex voluptas voluptate molestias consequuntur in. Perferendis!</p>
                                <div className="box-user flex items-center mt-3">
                                    <img className='rounded-full w-16 h-16 mr-5' src={imge3} alt="" />
                                    <div className="text leading-7">
                                        <h6 className='text-xl'>Client Name</h6>
                                        <p className='text-gray-500'>Profession</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
