import React from 'react';
import { Link } from 'react-router-dom';

// import style css
import './style/OurTeam.css'

// import imges Team 
import img1 from '../../img/team-1.jpg'
import img2 from '../../img/team-2.jpg'
import img3 from '../../img/team-3.jpg'
import img4 from '../../img/team-4.jpg'

// import icons 
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';




const MinOurTeam = () => {
    return (
        <>
            <div className="OurTeam bg-blue-50 ">
                <div className='w-11/12 Main-OurTeam  m-auto flex items-center justify-between pt-20'>
                    <div className="left w-2/4 p-10">
                        <button className="btn border py-2 px-6 rounded-3xl text-blue-800">Our Team</button>
                        <h4 className=' py-7 text-4xl text-black font-extrabold'>
                            Meet Our Experienced Team Members
                        </h4>
                        <div className="brg">
                            <p className=' text-gray-500 mb-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>                    </div>
                        <div className="flex gap-4">
                            <Link className=' border rounded-3xl h-14 w-40 flex items-center justify-center bg-blue-800 text-white mt-4 block' to=''>Read More</Link>
                        </div>
                    </div>
                    <div className="rigth w-2/4">
                        <div className="boxs grid grid-cols-1 md:grid-cols-2 p-3 gap-5">
                            <div className="box1 -mt-7">
                                <div className="box my-5 text-center bg-white rounded-lg py-10 px-4 hover:border-blue-800 border-2 transition">
                                    <div className="icon flex items-center justify-center  text-blue-800">
                                        <img className='rounded-full w-32' src={img1} alt="" />
                                    </div>
                                    <h4 className='text-2xl font-bold my-5'>Boris Johnson</h4>
                                    <p className=' text-gray-600 my-5'>Founder & CEO</p>
                                    <div className="flex justify-around m-auto gap-2">
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white   mt-4 block' to=''><FacebookIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><InstagramIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><YouTubeIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><XIcon className='rounded-full' /></Link>
                                    </div>
                                </div>
                                <div className="box my-5 text-center bg-white rounded-lg py-10 px-4 hover:border-blue-800 border-2 transition">
                                    <div className="icon flex items-center justify-center  text-blue-800">
                                        <img className='rounded-full w-32' src={img2} alt="" />
                                    </div>
                                    <h4 className='text-2xl font-bold my-5'>Adam Crew</h4>
                                    <p className=' text-gray-600 my-5'>Executive Manager</p>
                                    <div className="flex justify-around m-auto gap-2">
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white   mt-4 block' to=''><FacebookIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><InstagramIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><YouTubeIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><XIcon className='rounded-full' /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box my-5 text-center bg-white rounded-lg py-10 px-4 hover:border-blue-800 border-2 transition">
                                    <div className="icon flex items-center justify-center  text-blue-800">
                                        <img className='rounded-full w-32' src={img2} alt="" />
                                    </div>
                                    <h4 className='text-2xl font-bold my-5'>Kate Winslet</h4>
                                    <p className=' text-gray-600 my-5'>Co Founder</p>
                                    <div className="flex justify-around m-auto gap-2">
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white   mt-4 block' to=''><FacebookIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><InstagramIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><YouTubeIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><XIcon className='rounded-full' /></Link>
                                    </div>
                                </div>
                                <div className="box my-5 text-center bg-white rounded-lg py-10 px-4 hover:border-blue-800 border-2 transition">
                                    <div className="icon flex items-center justify-center  text-blue-800">
                                        <img className='rounded-full w-32' src={img4} alt="" />
                                    </div>
                                    <h4 className='text-2xl font-bold my-5'>Cody Gardner</h4>
                                    <p className=' text-gray-600 my-5'>Project Manager</p>
                                    <div className="flex justify-around m-auto gap-2">
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white   mt-4 block' to=''><FacebookIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><InstagramIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><YouTubeIcon className='rounded-full' /></Link>
                                        <Link className=' border rounded-full w-10 flex items-center justify-center h-10 bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border text-white  mt-4 block' to=''><XIcon className='rounded-full' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MinOurTeam;
