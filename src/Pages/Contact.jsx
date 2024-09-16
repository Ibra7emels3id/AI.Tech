import React from 'react';
import { Link } from 'react-router-dom';

// impoer style css 
import '../Components/style/Contact.css'

// import imge 
import hero from '../../img/hero-img.png'
import Navbar from '../Components/Navbar';

// import Components
import Footer from '../Components/Footer';
import NewSletter from '../Components/NewSletter';



const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="manheader bg-blue-900">
                <div className='head w-11/12 m-auto flex items-center justify-between pt-32'>
                    <div className="left w-full">
                        <h4 className=' py-4 font-thin text-8xl text-white'>
                            contact
                        </h4>
                        <div className="flex gap-4 items-center text-white">
                            <Link className=' w-16 text-center py-3 px- text-white' to=''>Home</Link>/
                            <Link className=' w-16 text-center py-3 px- text-white' to=''>Pages</Link>/
                            <Link className=' w-18 text-center py-3 px- text-white' to=''>contact</Link>
                        </div>
                    </div>
                    <div className="rigth w-8/12">
                        <div className="imge     flex items-end justify-end">
                            <img className=' px-10 w-full' src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contact p-5 my-14 text-center">
                <button className='bg-blue-800 py-4 px-9 text-white rounded-3xl'>Contact</button>
                <h5 className='text-5xl my-4 text-blue-950'>If You Have Any Query, Please Contact Us</h5>
                <p className='my-4 text-xl w-8/12 m-auto'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                <div className="Forms w-6/12 m-auto">
                    <form action="" className='flex flex-col gap-3'>
                        <div className='flex gap-2 flex-wra justify-between'>
                            <input className='border h-12 p-2 w-full outline-0' type="text" name="" id="" placeholder='Enter your Name' />
                            <input className='border h-12 p-2 w-full outline-0' type="email" name="" id=""  placeholder='Enter your Email' />
                        </div>
                        <input className='border h-12 p-2 w-full outline-0' type="text" name="" id="" placeholder='Enter your Subject' />
                        <textarea className='border p-2 w-full outline-0' name="" id="" cols="30" rows="7" placeholder='Enter your Message'></textarea>
                        <input className='border  h-16 bg-blue-600 text-white cursor-pointer p-2 w-full outline-0' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
            <NewSletter />
            <Footer />
        </>
    );
}
export default Contact;
