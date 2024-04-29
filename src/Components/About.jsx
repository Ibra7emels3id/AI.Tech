import React from 'react';
import { Link } from 'react-router-dom';

// import style css
import './style/About.css'

// import img About 
import AboutImg from '../../img/about-img.jpg'

// import Icons materail ui 
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const About = () => {
    return (
        <>
            <div className=' About w-11/12  m-auto flex items-center justify-between pt-20'>
                <div className="left w-2/4 p-10">
                    <div className="About-imge relative  w-12/12  flex items-center">
                        <img className=' w-full  ' src={AboutImg} alt="" />
                    </div>
                </div>
                <div className="rigth w-2/4 p-5">
                    <button className="btn border py-2 px-6 rounded-3xl text-blue-800">About Us</button>
                    <h4 className=' py-7 text-4xl text-black font-extrabold'>
                        We Make Your Business Smarter with Artificial Intelligence
                    </h4>
                    <div className="brg">
                        <p className=' text-gray-600 mb-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <p className=' text-gray-600 text-base mt-5'>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
                    </div>
                    <div className="question flex justify-between w-10/12 my-5">
                        <div className="left flex flex-col">
                            <span className=' font-bold p-2'><CheckIcon className=' text-blue-800 font-extrabold'/>Award Winning</span>
                            <span className=' font-bold p-2'><CheckIcon className=' text-blue-800 font-extrabold'/>Professional Staff</span>
                        </div>
                        <div className="rigth flex flex-col">
                            <span className=' font-bold p-2'><CheckIcon className=' text-blue-800 font-extrabold' />24/7 Support</span>
                            <span className=' font-bold p-2'><CheckIcon className=' text-blue-800 font-extrabold'/>Fair Prices</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link className=' border rounded-3xl h-14 w-40 flex items-center justify-center bg-blue-800 text-white mt-4 block' to=''>Read More</Link>
                        <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white  text-blue-800   mt-4 block' to=''><FacebookIcon className='rounded-full'/></Link>
                        <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white text-blue-800   mt-4 block' to=''><InstagramIcon className='rounded-full'/></Link>
                        <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white text-blue-800   mt-4 block' to=''><YouTubeIcon className='rounded-full'/></Link>
                        <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white text-blue-800   mt-4 block' to=''><XIcon className='rounded-full'/></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
