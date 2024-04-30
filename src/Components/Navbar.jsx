import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// import style 
import './style/header.css'



// import Icons Material ui 
import SearchIcon from '@mui/icons-material/Search';
import ListLinks from './ListLinks';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    const [bgHeader, setbgHeader] = useState('')
    const [ClickIcons, setClickIcons] = useState('hidden')

    // handle bg Nav Bar
    window.onscroll = () => {
        if (scrollY > 10) {
            setbgHeader('bg-blue-800')
        } else {
            setbgHeader('')
        }
    }

    // handle Click iCon List
    const handleListIcon = () => {
        if (ClickIcons === 'hidden') {
            setClickIcons('block')
        }else{
            setClickIcons('hidden')
        }
    }

    return (
        <>
            <nav className={`Navbar z-50 flex justify-between px-10  py-5 items-center fixed w-full ${bgHeader}`}>
                <div className="logo">
                    <Link to='/to'><h1 className=' text-white font-mono text-4xl'>AI.Tech</h1></Link>
                </div>
                <div className="links">
                    <ul className='flex gap-3 items-center'>
                        <li>
                            <NavLink className=' text-zinc-400 active p-3' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white ' to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white' to='/services'>services</NavLink>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white' to='/Projects'>Projects</NavLink>
                        </li>
                        <li className=' relative'>
                            <Link className='Pages transition-opacity text-zinc-400 p-3 hover:text-white flex items-center '>Pages <KeyboardArrowDownIcon/>
                            <ul className=' absolute top-12 bg-blue-400 w-44 -left-10 text-center flex flex-col rounded-xl p-3 gap-2 opacity-0 hidden'>
                                <li className='text-white bg-blue-900 p-1 rounded'><Link to='/featurs'>Featurs</Link></li>
                                <li className='text-white bg-blue-900 p-1 rounded'><Link to='/ourteam'>Our Team</Link></li>
                                <li className='text-white bg-blue-900 p-1 rounded'><Link to='/faqs'>FAQs</Link></li>
                                <li className='text-white bg-blue-900 p-1 rounded'><Link to='/testimonial'>Testimonial</Link></li>
                            </ul>
                            </Link>
                        </li>
                        <li>
                            <NavLink className=' text-zinc-400 p-3 hover:text-white' to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <button className=' text-zinc-400 p-3 hover:text-white' to=''><SearchIcon /></button>
                        </li>
                    </ul>
                </div>
                <label className="hamburger hidden">
                    <input onClick={() => {
                        handleListIcon()
                    }} type="checkbox" />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </nav>
            <ListLinks hanBlock={ClickIcons} />
        </>
    );
}

export default Navbar;
