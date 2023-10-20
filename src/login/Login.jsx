/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/Firebase.config';

const Login = () => {

    const auth = getAuth(app)
    const provider= new GoogleAuthProvider()

    const { singIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location i n the login page", location);

  const handelLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

singIn(email,password)
  .then((result) => {
      console.log(result.user)
          e.target.reset();

    navigate(location?.state ? location.state : "/");
  })
  .catch((error) => {
    console.error(error);
  });
      
     
      


  };
    const handelPopUp = () => {
        


 signInWithPopup(auth, provider)
   .then((result) => {
     const user = result.user;
       console.log(user);
       navigate(location?.state ? location.state : "/");
   })
   .catch((error) => {
     console.log("error", error.message);
   });



    }



    return (
      <div>
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
          <div className="flex shadow-md">
            <div
              className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
              style={{ width: "24rem", height: "32rem" }}
            >
              <div className="w-72">
                <h1 className="text-xl font-semibold">Welcome back</h1>
                <small className="text-gray-400">
                  Welcome back! Please enter your details
                </small>
                <form onSubmit={handelLogin} className="mt-4">
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 block text-xs font-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="*****"
                      className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    />
                  </div>
                  <div className="mb-3 flex flex-wrap content-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="mr-1 checked:bg-purple-700"
                    />
                    <label
                      htmlFor="remember"
                      className="mr-auto text-xs font-semibold"
                    >
                      Remember for 30 days
                    </label>
                    <a
                      href="#"
                      className="text-xs font-semibold text-purple-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-3">
                    <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                      Sign in
                    </button>
                    <button
                      onClick={handelPopUp}
                      className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
                    >
                      <img
                        className="w-5 mr-2"
                        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                        alt="Google"
                      />
                      Sign in with Google
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <span className="text-xs text-gray-400 font-semibold">
                    Don't have account?
                  </span>
                  <NavLink to="/register">
                    {" "}
                    <a
                      href="#"
                      className="text-xs font-semibold text-purple-700"
                    >
                      Register
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;