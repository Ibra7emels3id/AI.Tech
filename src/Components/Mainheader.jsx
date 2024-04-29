import React from 'react';
import { Link } from 'react-router-dom';

// impoer style css 
import './style/header.css'

// import imge 
import hero from '../../img/hero-img.png'
import { css } from '@emotion/react';

const Mainheader = () => {
    return (
        <>
            <div className="manheader">
                <div className='head w-11/12 m-auto flex items-center justify-between pt-36'>
                    <div className="left w-2/4">
                        <button className="btn border py-2 px-6 rounded-3xl text-white">AI.Tech</button>
                        <h4 className=' py-4 font-thin text-6xl text-white'>
                            Artificial Intelligence for Your Business
                        </h4>
                        <p className=' text-white text-base mb-3'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit</p>
                        <div className="flex gap-4">
                            <Link className=' border rounded-3xl py-3 px-6 text-black bg-white mt-4 block' to=''>Read More</Link>
                            <Link className=' border rounded-3xl py-3 px-6 text-white  mt-4 block' to=''>Contact Us</Link>
                        </div>
                    </div>
                    <div className="rigth w-2/4">
                        <div className="imge  w-12/12  flex items-center">
                            <img className=' px-10 w-full' src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mainheader;
