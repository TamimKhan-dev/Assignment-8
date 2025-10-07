import React from 'react';
import logoImg from '../../assets/logo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
          <footer className='flex flex-col items-center px-10 py-7 bg-[#001931] text-white'>
             <div className='flex flex-col md:flex-row justify-between w-full pb-10 border-b-1 border-gray-500'>

                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={logoImg} alt="" />
                    <h4 className='text-xl font-medium'>App Store</h4>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40'>

                    <div>
                        <h3 className='text-xl text-gray-300 mb-2'>Services</h3>
                        <ul className='text-md font-normal'>
                            <li>Branding</li>
                            <li>Design</li>
                            <li>Marketing</li>
                            <li>Advertisement</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl text-gray-300 mb-2'>Company</h3>
                        <ul className='text-md font-normal'>
                            <li>Contact</li>
                            <li>Jobs</li>
                            <li>About us</li>
                            <li>Press kit</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl text-gray-300 mb-2'>Legal</h3>
                        <ul className='text-md font-normal'>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Cookie policy</li>
                        </ul>
                    </div>

                </div>

                <div className=''>
                    <h3 className='text-xl'>Social Links</h3>
                    <div className='flex gap-2 mt-2'>
                        <FaSquareXTwitter style={{fontSize: '30px'}}/>
                        <FaLinkedin style={{fontSize: '30px'}}/>
                        <FaFacebookSquare style={{fontSize: '30px'}}/>
                    </div>
                </div>
             </div>
             <div className='pt-8'>
                <p>Copyright © 2025 - All right reserved</p>
             </div>
          </footer>  
        </>
    );
};

export default Footer;