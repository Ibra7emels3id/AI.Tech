import React from 'react';
import { Link } from 'react-router-dom';

// import style css 
import './style/ListLinks.css'


// import Icons Material ui 
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




const ListLinks = ({ hanBlock }) => {


    return (
        <>
            <div className={`ListLinks ${hanBlock} x m-auto fixed top-24 left-1/2 w-10/12 h-96`}>
                <div className="Links rounded-2xl bg-blue-800 w-full h-full">
                    <ul className='flex flex-col text-center items-center gap-3 p-5'>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-white p-3 w-full' to='/'>Home</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white ' to='/about'>About</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to='/services'>services</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to='/projects'>Projects</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1 relative'>
                            <Link className='Pages transition-opacity text-zinc-400 p-3 hover:text-white flex items-center text-center justify-center '>Pages <KeyboardArrowDownIcon />
                                <ul className=' absolute top-12 bg-blue-400 w-44 -left-10 text-center flex flex-col rounded-xl p-3 gap-2 opacity-0 hidden'>
                                    <li className='text-white bg-blue-900 p-1 rounded'><Link to='/featurs'>Featurs</Link></li>
                                    <li className='text-white bg-blue-900 p-1 rounded'><Link to='/ourteam'>Our Team</Link></li>
                                    <li className='text-white bg-blue-900 p-1 rounded'><Link to='/faqs'>FAQs</Link></li>
                                    <li className='text-white bg-blue-900 p-1 rounded'><Link to='/testimonial'>Testimonial</Link></li>
                                </ul>
                            </Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to='/contact'>Contact</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <button className=' text-zinc-400 p-3  w-full hover:text-white' to=''><SearchIcon /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ListLinks;
