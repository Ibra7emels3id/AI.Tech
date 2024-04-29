import React from 'react';
import { Link } from 'react-router-dom';

// import style css 
import './style/WhyChoose.css'

// import imge 
import hero from '../../img/feature.png'

// import Icons materail ui 
import CheckIcon from '@mui/icons-material/Check';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';



const WhyChoose = () => {
    return (
        <>
            <div className="WhyChoose w-full m-auto bg-blue-600">
                <div className='container w-12/12 m-auto grid grid-cols-1 lg:grid-cols-2 pt-20'>
                    <div className="left p-10">
                        <button className="btn border py-2 px-6 rounded-3xl text-white">Why Choose Us</button>
                        <h4 className=' py-7 text-4xl text-white font-extrabold'>
                            We Make Your Business Smarter with Artificial Intelligence
                        </h4>
                        <div className="brg">
                            <p className=' text-white mb-7'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>                        </div>
                        <div className="question flex justify-between w-8/12 my-5">
                            <div className="left flex flex-col">
                                <p className=' font-bold p-2 flex items-center'><CheckIcon className=' text-blue-800 font-extrabold bg-white rounded-full h-5 w-11' /><span className='mx-2 text-white'>Diam dolor diam ipsum et tempor sit</span></p>
                                <p className=' font-bold p-2 flex items-center'><CheckIcon className=' text-blue-800 font-extrabold bg-white rounded-full h-5 w-11' /><span className='mx-2 text-white'>Diam dolor diam ipsum et tempor sit</span></p>
                                <p className=' font-bold p-2 flex items-center'><CheckIcon className=' text-blue-800 font-extrabold bg-white rounded-full h-5 w-11' /><span className='mx-2 text-white'>Diam dolor diam ipsum et tempor sit</span></p>
                            </div>
                        </div>
                        <div className="details flex gap-4">
                            <div className="flex gap-4 items-center bg-blue-500 p-3 rounded-3xl">
                                <div className="icon">
                                    <PeopleAltIcon sx={{fontSize: '80px', color: 'white'}} />
                                </div>
                                <div className="text">
                                    <h6 className='text-white text-xl'>92342</h6>
                                    <p className='text-white text-xl'>Happy Clients</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center bg-blue-500 p-3 rounded-3xl">
                                <div className="icon">
                                    <CheckIcon sx={{fontSize: '80px', color: 'white'}} />
                                </div>
                                <div className="text">
                                    <h6 className='text-white text-xl'>92342</h6>
                                    <p className='text-white text-xl'>Project Complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rigth flex ">
                        <div className="imge relative  w-12/12  flex items-end">
                            <img className=' w-full  ' src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChoose;
