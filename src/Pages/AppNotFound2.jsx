import React from 'react';
import appErr from '../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFound2 = () => {
    return (
        <div className='place-self-center col-span-4 py-10 text-center flex flex-col items-center justify-center space-y-5'>
            <img src={appErr} alt="" />
            <h2 className='text-5xl font-bold '>OPPS!! APP NOT FOUND</h2>
            <p className='text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/apps' className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-10 font-semibold text-md'>Go Back!</Link>
        </div>
    );
};

export default AppNotFound2;