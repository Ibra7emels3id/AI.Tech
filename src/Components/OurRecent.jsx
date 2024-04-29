import React from 'react';

// import style css 
import './style/OurRecent.css'

// import imge 
import Project1 from '../../img/project-1.jpg'
import Project2 from '../../img/project-2.jpg'
import Project3 from '../../img/project-3.jpg'

// import icons ui 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OurRecent = () => {
    return (
        <>
            <div className="OurRecent mb-32">
                <div className="title mt-28 mb-12 text-center">
                    <button className="btn border py-2 mb-5 px-6 rounded-3xl text-blue-800">Case Study</button>
                    <h3 className='text-4xl text-slate-900 text-center'>Explore Our Recent AI Case Studies</h3>
                </div>
                <div className='container w-10/12 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                    <div className="box ">
                        <div className="imge truncate transition-all rounded-2xl w-full relative">
                            <img className='w-full rounded-2xl' src={Project1} alt="" />
                            <div className="text w-full absolute bottom-10 left-5">
                                <small className='text-white bg-blue-900 py-2 px-5 rounded-3xl'>Robotic Automation</small>
                                <p className='text-white py-5 w-52'>Lorem elitr magna stet <br/>eirmod labore amet labore clita</p>
                                <ArrowForwardIcon sx={{ height: '50px', width: '50px', fontSize: '20px' }} className='text-white rounded-full bg-blue-800 flex items-center justify-center' />
                            </div>
                        </div>
                    </div>
                    <div className="box ">
                        <div className="imge truncate rounded-2xl w-full relative">
                            <img className='w-full rounded-2xl' src={Project2} alt="" />
                            <div className="text absolute  bottom-10 left-5">
                                <small className='text-white bg-blue-900 py-2 px-5 rounded-3xl'>Robotic Automation</small>
                                <p className='text-white my-5'>Lorem elitr magna stet <br/> eirmod labore amet labore clita</p>
                                <ArrowForwardIcon sx={{ height: '50px', width: '50px', fontSize: '20px' }} className='text-white rounded-full bg-blue-800 flex items-center justify-center' />
                            </div>
                        </div>
                    </div>
                    <div className="box ">
                        <div className="imge  truncate rounded-2xl w-full relative">
                            <img className='w-full rounded-2xl hover:scale-50' src={Project3} alt="" />
                            <div className="text  absolute bottom-10 left-5">
                                <small className='text-white bg-blue-900 py-2 px-5 rounded-3xl'>Robotic Automation</small>
                                <p className='text-white my-5'>Lorem elitr magna stet <br/> eirmod labore amet labore clita</p>
                                <ArrowForwardIcon sx={{ height: '50px', width: '50px', fontSize: '20px' }} className='text-white rounded-full bg-blue-800 flex items-center justify-center' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurRecent;
