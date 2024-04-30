import React from 'react';
import { Link } from 'react-router-dom';

// impoer style css 
import '../Components/style/header.css'

// import imge 
import hero from '../../img/hero-img.png'
import Navbar from '../Components/Navbar';

// import Icons 
import WarningIcon from '@mui/icons-material/Warning';

// import Components
import Footer from '../Components/Footer';
import NewSletter from '../Components/NewSletter';
import Pagservices from '../Components/Pagservices';
import Testimonial from '../Components/MinTestimonial';


const Error404 = () => {
    return (
        <>
            <Navbar />
            <div className="manheader bg-blue-900">
                <div className='head w-11/12 m-auto flex items-center justify-between pt-32'>
                    <div className="left w-full">
                        <h4 className=' py-4 font-thin text-8xl text-white'>
                            Error 404
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
            <div className="Error p-5 my-14 text-center">
                <div className="Icons">
                    <WarningIcon sx={{fontSize:'100px' , color:'#1363c6'}}/>
                </div>
                <h5 className='text-9xl text-blue-950'>404</h5>
                <p className='text-4xl text-blue-950 my-3'>Page Not Found</p>
                <p className='my-4 text-xl w-8/12 m-auto'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                <Link className=' bg-blue-800 py-5 px-7 block mt-4 w-52 m-auto rounded-3xl text-white' to='/'>Go Back To Home</Link>
            </div>
            <NewSletter />
            <Footer />
        </>
    );
}

export default Error404;
