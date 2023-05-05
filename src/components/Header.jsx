import React, { useContext, useState } from 'react';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../authProvider/AuthProvider';
import { FaBars } from "react-icons/fa";



const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [toggler, setToggler] = useState(false);

    // console.log(user?.photoURL);

    return (
        <div className='grid grid-cols-2 py-3'>
            <div className='flex items-center'>
                <div className='h-10'>
                    <img className='h-full rounded-md' src="https://i.ibb.co/k8gmPns/logo.png" alt="" />
                </div>
            </div>


            <div className={`${toggler ? 'top-14 right-8' : '-top-64 right-8' } md:flex justify-end items-center absolute md:static duration-500 p-2 rounded-md md:bg-white bg-pink-200`}>
                <ActiveLink className='mr-4 font-bold' to='/'><button>Home</button></ActiveLink>
                <ActiveLink className='mr-4 font-bold' to='/blog'><button>Blog</button></ActiveLink>

                {
                    user ?
                        <>
                            <button onClick={logOut} className='text-yellow-400 font-bold py-2 px-3 bg-rose-500 rounded-md'>Sign out</button>
                            <span className='md:w-10 w-4 ml-4'><img className='w-full rounded-full' src={user?.photoURL} alt="" /></span>
                        </> :
                        <>
                            <ActiveLink className='mr-4 font-bold' to='/register'><button>Register</button></ActiveLink>
                            <ActiveLink className='font-bold' to='/login'>Sign in</ActiveLink>
                        </>
                } 

            </div>

            <div className='md:hidden flex justify-end items-center' onClick={() => setToggler(!toggler)}>
                    <FaBars />
            </div>


        </div>
    );
};

export default Header;