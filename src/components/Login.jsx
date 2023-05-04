import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail} from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null);
    const emailRef = useRef();

    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const signedUser = result.user;
                setUser(signedUser);
            })
            .catch(error => {
                
                console.log(error.message)
            })
    }

    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then(result => {
                const signedUser = result.user;
                setUser(signedUser);
            })
            .catch(error => {
                console.log(error.message)

            })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                setError('');
                const userEP = res.user;
                setSuccess('SignIn success...');
                // setUser(userEP);
                // console.log(userEP);
                navigate('/');

            })
            .catch(err => setError(err.message))
    }

    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('please provide email');
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('a reset mail has been sent to your mail');

            })
            .catch(err => setError(err.message))
    }


    return (
        <div className='my-8 flex justify-center'>
            
                <div className='shadow-md w-full lg:w-1/2 rounded-md p-5'>
                    <form onSubmit={handleSignIn} className='flex flex-col items-center'>

                        <input className='py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' ref={emailRef} type="email" name='email' id='email' placeholder='Enter email' required />
                        <input className='my-5 py-1 px-3 rounded-md bg-cyan-800 text-white outline-none' type="password" name='password' id='password' placeholder='Enter password' required />
                        <input className='py-1 px-2 bg-green-700 rounded-md text-white' type="submit" value='SignIn' />
                        <p><small>Forget Password? <button onClick={handleResetPassword}>Reset</button></small></p>
                        <p><small>No account? <Link to='/register'>SignUp</Link></small></p>

                        <div className='mt-5'>
                            <button className='rounded-md py-1 px-2 bg-fuchsia-500 text-zinc-50 mr-5' onClick={handleGoogleSignIn}>Sign in with Google</button>
                            <button className='rounded-md py-1 px-2 bg-emerald-600 text-zinc-50' onClick={handleGitHubSignIn}>Sign in with gitHub</button>
                        </div>

                    </form>

                </div>
        </div>
    );
};

export default Login;