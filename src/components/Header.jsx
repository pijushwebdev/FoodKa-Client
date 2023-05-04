import React, { useContext } from 'react';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link } from 'react-router-dom';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.photoURL);

    return (
        <div className='grid grid-cols-2 py-3'>
            <div className='flex items-center'>
                <div className='h-10'>
                    <img className='h-full rounded-md' src="https://i.ibb.co/k8gmPns/logo.png" alt="" />
                </div>
            </div>


            <div className='flex justify-end items-center text-center py-2'>
                <ActiveLink className='mr-4 font-bold' to='/'><button>Home</button></ActiveLink>
                <ActiveLink className='mr-4 font-bold' to='/blog'><button>Blog</button></ActiveLink>

                {
                    user ?
                        <>
                            <button onClick={logOut} className='text-yellow-400 font-bold py-2 px-3 bg-rose-500 rounded-md'>Sign out</button>
                            <span className='w-10 ml-4'><img className='w-full rounded-full' src={user?.photoURL} alt="" /></span>
                        </> :
                        <>
                            <Link className='mr-4 font-bold' to='/register'><button>Register</button></Link>
                            <Link className='font-bold' to='/login'>Sign in</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;