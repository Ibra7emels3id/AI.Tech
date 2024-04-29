import React from 'react';
import { Link } from 'react-router-dom';

// import style css 
import './style/Footer.css'

// import icons ui 
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




const Footer = () => {
    return (
        <>
            <div className="Footer bg-blue-950 ">
                <div className="container m-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-5 py-16 gap-7">
                    <div className="box">
                        <div className="title ">
                            <h3 className='text-5xl text-white'>AI.TECH</h3>
                        </div>
                        <p className=' text-gray-500 mt-3 leading-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempo</p>
                    </div>
                    <div className="box">
                        <div className="title ">
                            <h3 className='text-white text-3xl'>Get In Touch</h3>
                        </div>
                        <div className="text mt-7 flex flex-col gap-3">
                            <p className='text-gray-500'><PlaceIcon sx={{ fontSize: '30px' }} className='mr-3' /><span>123 Street, New York, USA</span></p>
                            <p className='text-gray-500'><CallIcon sx={{ fontSize: '30px' }} className='mr-3' /><span>+012 345 67890</span></p>
                            <p className='text-gray-500'><EmailIcon sx={{ fontSize: '30px' }} className='mr-3' /><span>info@example.com</span></p>
                            <div className="icons flex gap-4 ">
                                <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white  text-white   mt-4 block' to=''><FacebookIcon className='rounded-full' /></Link>
                                <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white text-white   mt-4 block' to=''><InstagramIcon className='rounded-full' /></Link>
                                <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white text-white   mt-4 block' to=''><YouTubeIcon className='rounded-full' /></Link>
                                <Link className=' border rounded-full w-14 flex items-center justify-center h-14 hover:bg-blue-800 hover:text-white text-white   mt-4 block' to=''><XIcon className='rounded-full' /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="title ">
                            <h3 className='text-white text-3xl'>Popular Link</h3>
                        </div>
                        <div className="Links flex flex-col gap-4 mt-6">
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />About Us</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Contact Us</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Privacy Policy</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Terms & Conditin</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Careen</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="title ">
                            <h3 className='text-white text-3xl'>Our Services</h3>
                        </div>
                        <div className="Links-Services flex flex-col gap-4 mt-5">
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Robotic Automation</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Machine learning</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Predictive Analysis</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Data Science</Link>
                            <Link to='' className='text-gray-500'><ArrowForwardIosIcon className='mr-2' />Robot Technology</Link>
                        </div>
                    </div>
                </div>
                <div className="main-Footer border-t-2 flex justify-between flex-wrap-reverse text-center gap-5 py-5  w-11/12 m-auto">
                    <h6 className='text-white'>© Your Site Name, All Right Reserved. Designed By HTML Codex Distributed By ThemeWagon</h6>
                    <div className="Links flex ">
                        <Link to='' className=' text-gray-500 hover:text-white border-r-2 px-5'>Home</Link>
                        <Link to='' className=' text-gray-500 hover:text-white border-r-2 px-5'>Cookies</Link>
                        <Link to='' className=' text-gray-500 hover:text-white border-r-2 px-5'>Help</Link>
                        <Link to='' className=' text-gray-500 hover:text-white px-5'>FAQs</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
