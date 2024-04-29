import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import style 
import './style/header.css'



// import Icons Material ui 
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [bgHeader, setbgHeader] = useState('')

    window.onscroll = () => {
        if (scrollY > 10) {
            setbgHeader('bg-blue-800')
        } else {
            setbgHeader('')
        }
    }

    return (
        <>
            <nav className={`Navbar flex justify-between px-10  py-5 items-center fixed w-full ${bgHeader}`}>
                <div className="logo">
                    <Link to='/to'><h1 className=' text-white font-mono text-4xl'>AI.Tech</h1></Link>
                </div>
                <div className="links hidden">
                    <ul className='flex gap-3'>
                        <li>
                            <Link className=' text-white p-3' to=''>Home</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white ' to=''>About</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white' to=''>services</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white' to=''>Projects</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white' to=''>services</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white' to=''>Pages</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white' to=''>Contact</Link>
                        </li>
                        <li>
                            <Link className=' text-zinc-400 p-3 hover:text-white' to=''><SearchIcon /></Link>
                        </li>
                    </ul>
                </div>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: '0' , color: 'white' , display: ' none' }}>
                    <MenuIcon />
                </IconButton>
            </nav>
        </>
    );
}

export default Navbar;
