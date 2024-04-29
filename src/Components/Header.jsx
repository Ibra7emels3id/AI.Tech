import React from 'react';
import Navbar from './Navbar';

// import style 
import './style/header.css'
import Mainheader from './Mainheader';



const Header = () => {
    return (
        <>
            <header  className='header relative'>
                <Navbar />
                <Mainheader />
            </header>
        </>
    );
}

export default Header;
