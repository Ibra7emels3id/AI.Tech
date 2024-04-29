import React from 'react';

// import style css
import './style/NewSletter.css'

// import imges 
import  Image  from '../../img/newsletter.png';



const NewSletter = () => {
    return (
        <>
            <div className="NewSletter bg-blue-800">
                <div className=" grid grid-cols-1 md:grid-cols-2 m-auto py-9 ">
                    <div className="left my-10 ">
                        <div className="imge relative w-9/12   flex items-center">
                            <img className=' w-full  ' src={Image} alt="" />
                        </div>
                    </div>
                    <div className="rigth px-3 flex flex-col justify-center">
                        <button className="btn w-40 border py-2  rounded-3xl text-white">New Sletter</button>
                        <h4 className=' py-7 text-4xl text-white font-extrabold'>
                            We Make Your Business Smarter with Artificial Intelligence
                        </h4>
                        <div className="input">
                            <input className=' w-10/12 h-14 rounded-3xl px-4' type="email" name="" id="" placeholder='Enter your Email' />
                        </div>
                        <div className="brg">
                            <p className=' text-gray-500  mt-7'>Diam sed sed dolor stet amet eirmod</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewSletter;
