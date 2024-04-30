import React from 'react';
import { Link } from 'react-router-dom';

// import style css 
import './style/ListLinks.css'


// import Icons Material ui 
import SearchIcon from '@mui/icons-material/Search';

const ListLinks = ({hanBlock}) => {
    return (
        <>
            <div className={`ListLinks ${hanBlock} x m-auto fixed top-24 left-1/2 w-10/12 h-96`}>
                <div className="Links rounded-2xl bg-blue-800 w-full h-full">
                    <ul className='flex flex-col text-center gap-3 p-5'>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-white p-3 w-full' to=''>Home</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white ' to=''>About</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to=''>services</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to=''>Projects</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to=''>services</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to=''>Pages</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to=''>Contact</Link>
                        </li>
                        <li className='w-full bg-blue-500 py-1'>
                            <Link className=' text-zinc-400 p-3  w-full hover:text-white' to=''><SearchIcon /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ListLinks;
