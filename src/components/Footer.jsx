import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-100 pt-10 rounded-sm'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                
                <div className='flex justify-center'>
                    <div>
                        <h1 className='font-bold'>Services</h1>
                        <Link className='block' to='/'>Home Delivery</Link>
                        <Link className='block' to='/'>Working Model</Link>
                        <Link className='block' to='/'>Progress</Link>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div>
                        <h1 className='font-bold'>Company</h1>
                        <Link className='block' to='/'>About us</Link>
                        <Link className='block' to='/'>Contact</Link>
                        <Link className='block' to='/'>Our Story</Link>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div>
                        <h1 className='font-bold'>Socials</h1>
                        <Link className='block' to='/'>Facebook</Link>
                        <Link className='block' to='/'>Twitter</Link>
                        <Link className='block' to='/'>Instagram</Link>
                    </div>
                </div>

            </div>

            <p className='text-center py-5 font-semibold'>All rights reserved &copy; Pijush Sarker || 2023</p>
        </div>
    );
};

export default Footer;