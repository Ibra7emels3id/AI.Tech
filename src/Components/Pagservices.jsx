import React from 'react';
import { Link } from 'react-router-dom';

// import style css
import './style/Services.css'

// import icons 
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Services = () => {
    return (
        <>
            <div className="services bg-blue-50 ">
                <div className='w-11/12 Main-services  m-auto flex items-center justify-between pt-20'>
                    <div className="left w-2/4 p-10">
                        <button className="btn border py-2 px-6 rounded-3xl text-blue-800">Services Us</button>
                        <h4 className=' py-7 text-4xl text-black font-extrabold'>
                            Our Excellent AI Solutions for Your Business
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
                                <div className="box my-5 text-center bg-white rounded-lg p-5 hover:bg-blue-800 transition">
                                    <div className="icon text-9xl text-blue-800">
                                        <SmartToyIcon sx={{ fontSize: '90px' }} className="text-9xl p-6 bg-blue-50 rounded-full " />
                                    </div>
                                    <h4 className='text-2xl font-bold my-3'>Robotic Automation</h4>
                                    <p className=' text-gray-600'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <button className='border py-3 px-7 rounded-3xl my-3 text-blue-800'>Read More</button>
                                </div>
                                <div className="box my-5 text-center bg-white rounded-lg p-5 hover:bg-blue-800 transition">
                                    <div className="icon text-9xl text-blue-800">
                                        <SchoolIcon sx={{ fontSize: '90px' }} className="text-9xl p-6 bg-blue-50 rounded-full " />
                                    </div>
                                    <h4 className='text-2xl font-bold my-3'>Robotic Automation</h4>
                                    <p className=' text-gray-600'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <button className='border py-3 px-7 rounded-3xl my-3 text-blue-800'>Read More</button>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box my-5 text-center bg-white rounded-lg p-5 hover:bg-blue-800 transition">
                                    <div className="icon text-9xl text-blue-800">
                                        <PsychologyIcon sx={{ fontSize: '90px' }} className="text-9xl p-6 bg-blue-50 rounded-full " />
                                    </div>
                                    <h4 className='text-2xl font-bold my-3'>Robotic Automation</h4>
                                    <p className=' text-gray-600'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <button className='border py-3 px-7 rounded-3xl my-3 text-blue-800'>Read More</button>
                                </div>
                                <div className="box my-5 text-center bg-white rounded-lg p-5 hover:bg-blue-800 transition">
                                    <div className="icon text-9xl text-blue-800">
                                        <PowerSettingsNewIcon sx={{ fontSize: '90px' }} className="text-9xl p-6 bg-blue-50 rounded-full " />
                                    </div>
                                    <h4 className='text-2xl font-bold my-3'>Robotic Automation</h4>
                                    <p className=' text-gray-600'>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <button className='border py-3 px-7 rounded-3xl my-3 text-blue-800'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
