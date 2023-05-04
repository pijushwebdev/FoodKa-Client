import React from 'react';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='flex items-center'>
                <div className='h-10'>
                    <img className='h-full rounded-md' src="https://i.ibb.co/k8gmPns/logo.png" alt="" />
                </div>
            </div>

            <div className='flex justify-end items-center text-center py-2'>
                <ActiveLink className='mr-4' to='/'><button>Home</button></ActiveLink>
                <ActiveLink className='mr-4' to='/blog'><button>Blog</button></ActiveLink>
                <ActiveLink className='mr-4' to='/profile'><button>Profile</button></ActiveLink>



                <span className='mr-4'></span>
                <button className='btn btn-warning'>Sign out</button>

                <ActiveLink className='mr-4' to='/register'><button>Register</button></ActiveLink>
                <ActiveLink to='/login'>Sign in</ActiveLink>
            </div>
        </div>
    );
};

export default Header;