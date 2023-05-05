import React, { useContext, useState } from 'react';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../authProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='grid grid-cols-2 py-3'>
            <div className='flex items-center'>
                <div className='h-10'>
                    <img className='h-full rounded-md' src='https://i.ibb.co/k8gmPns/logo.png' alt='' />
                </div>
            </div>

            <div className='flex justify-end items-center text-center py-2'>
                <button className='mr-4 font-bold md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {/* Menu bar icon */}
                    {isMenuOpen ? (
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    ) : (
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    )}
                </button>

                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ActiveLink className='block mt-4 md:inline-block md:mt-0 md:mr-4 font-bold' to='/'>
                        <button>Home</button>
                    </ActiveLink>
                    <ActiveLink className='block mt-4 md:inline-block md:mt-0 md:mr-4 font-bold' to='/blog'>
                        <button>Blog</button>
                    </ActiveLink>

                    {user ? (
                        <>
                            <button onClick={logOut} className='text-yellow-400 font-bold py-2 px-3 bg-rose-500 rounded-md'>
                                Sign out
                            </button>
                            <span className='w-10 ml-4'>
                                <img className='w-full rounded-full' src={user?.photoURL} alt='' />
                            </span>
                        </>
                    ) : (
                        <>
                            <ActiveLink className='block mt-4 md:inline-block md:mt-0 md:mr-4 font-bold' to='/register'>
                                <button>Register</button>
                            </ActiveLink>
                            <ActiveLink className='block md:inline-block font-bold' to='/login'>
                                Sign in
                            </ActiveLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
