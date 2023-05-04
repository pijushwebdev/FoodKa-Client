import React, { useContext } from 'react';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link} from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import { validPassword, validEmail } from './RegEx';
import { toast } from 'react-toastify';


const Register = () => {

    const { user, createUser } = useContext(AuthContext);

    

    // const verifyUserEmail = (email) => {
    //     sendEmailVerification(email);
    //     toast.success('A verification mail has been sent to your mail');

    // }
    const updateUserProfile = (user, name,photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => { })
            .catch(err => console.log(err.message))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photo.value;


        if (!validEmail.test(email)) {
            toast.error("Email not valid")
            return;
        } 
        if (!validPassword.test(password)) {
            toast.error("Password not valid")
            return;
        }

        createUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                // console.log(loggedUser);
                form.reset();
                // verifyUserEmail(loggedUser);
                updateUserProfile(loggedUser, name, photoURL)
                toast.success("Successfully created user");
                
            })
            .catch(error => toast.error(error.message))

    }
    return (
        <div className='my-6 flex justify-center'>
            <div className='shadow-md my-10 p-5 lg:w-1/2 w-full'>
                <form onSubmit={handleRegister} className='flex flex-col items-center'>
                    <input className='py-1 mb-5 px-3 rounded-md bg-cyan-800 text-white outline-none' type="text" name='name' id='name' placeholder='Enter name' required />
                    <input className='py-1 mb-5 px-3 rounded-md bg-cyan-800 text-white outline-none' name='photo' id='photo' placeholder='photo url (optional)' type="text" />
                    <input className='py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="email" name='email' id='email' placeholder='Enter email' required />
                    <input className='my-5 py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="password" name='password' id='password' placeholder='Enter password' required />
                    <input className='py-1 px-2 bg-green-700 rounded-md text-white' type="submit" value='SignUp' />
                    <p><small>Already have an account? <Link to='/login'>SignIn</Link></small></p>
                </form>
            </div>

        </div>
    );
};

export default Register;