import React from 'react';
import { Link } from 'react-router-dom';


// impoer style css 
import '../Components/style/header.css'

// import imge 
import hero from '../../img/hero-img.png'
import Navbar from '../Components/Navbar';


// import Components
import MainAbout from '../Components/MainAbout';
import WhyChoose from '../Components/WhyChoose';
import OurTeam from '../Components/MinOurTeam';
import NewSletter from '../Components/NewSletter';
import Footer from '../Components/Footer';


const About = () => {
    return (
        <>
            <Navbar/>
            <div className="manheader bg-blue-900">
                <div className='head w-11/12 m-auto flex items-center justify-between pt-32'>
                    <div className="left w-full">
                        <h4 className=' py-4 font-thin text-8xl text-white'>
                            About Us
                        </h4>
                        <div className="flex gap-4 items-center text-white">
                            <Link className=' w-16 text-center py-3 px- text-white' to=''>Home</Link>/
                            <Link className=' w-16 text-center py-3 px- text-white' to=''>Pages</Link>/
                            <Link className=' w-18 text-center py-3 px- text-white' to=''>About Us</Link>
                        </div>
                    </div>
                    <div className="rigth w-8/12">
                        <div className="imge     flex items-end justify-end">
                            <img className=' px-10 w-full' src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <MainAbout />
            <WhyChoose/>
            <OurTeam/>
            <NewSletter/>
            <Footer/>
        </>
    );
}

export default About;
