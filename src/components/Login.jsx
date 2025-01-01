import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState(null);
  const emailRef = useRef();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn, signInWithGoogle, signInWithGitHub, passwordReset } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const signedUser = result.user;
        setUser(signedUser);
        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        const signedUser = result.user;
        setUser(signedUser);
        navigate(from, { replace: true });
        toast.success("Successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const userEP = res.user;

        setUser(userEP);
        toast.success("Successfully Login");
        // console.log(userEP);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("please provide email");
    }
    passwordReset(email).then(() => {
      toast.error("a reset mail has been sent to your mail");
    });
  };

  return (
    <div className="my-8 flex justify-center">
      <div className="shadow-md w-full lg:w-1/2 rounded-md p-5">
        <form onSubmit={handleSignIn} className="flex flex-col items-center">
          <input
            className="py-1 px-3 rounded-md bg-[#faf5f9] border focus:border-[#D287C5] text-black outline-none"
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
          <input
            className="my-5 py-1 px-3 rounded-md bg-[#faf5f9] border focus:border-[#D287C5] text-black outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
          />
          <input
            className="py-1 px-3 bg-[#8b207a] w- rounded-md text-white"
            type="submit"
            value="Login"
          />
          <p>
            <small>
              Forget Password?{" "}
              <button onClick={handleResetPassword}>Reset</button>
            </small>
          </p>
          <p>
            <small>
              No account? <Link to="/register">SignUp</Link>
            </small>
          </p>

          <div className="mt-5">
            <button
              className="rounded-md py-1 px-2 bg-[#8b207a] text-zinc-50 mr-5"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
            <button
              className="rounded-md py-1 px-2 bg-[#b841a4] text-zinc-50"
              onClick={handleGitHubSignIn}
            >
              Sign in with gitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
