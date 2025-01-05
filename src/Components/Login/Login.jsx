import { useContext, useEffect, useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaLock,
  FaTwitter,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  //   const captchaRef = useRef(null);
  const { handleSignInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("login state from loginpage", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));

    // form.reset();
  };

  const validationCaptcha = (e) => {
    const captchaValue = e.target.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      alert("Valid Captcha");
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Captcha Does not match");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D1A054]">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <Link to="/">
          <FaArrowCircleLeft className="mb-8 text-3xl" />
        </Link>
        <div className="text-center mb-6">
          <h4 className="text-blue-500 text-6xl">
            <FaUserCircle />
          </h4>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="mb-4">
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-3 bg-gray-200 text-gray-600">
                <FaUser />
              </span>
              <input
                required
                name="email"
                type="email"
                className="flex-1 p-2 rounded-r-md focus:outline-none"
                placeholder="Type Your Email"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-3 bg-gray-200 text-gray-600">
                <FaLock />
              </span>
              <input
                required
                name="password"
                type="password"
                className="flex-1 p-2 rounded-r-md focus:outline-none"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-4 flex j items-center text-sm">
            <div className="flex items-center">
              <label>
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={validationCaptcha}
                name="captcha"
                placeholder="Captcha Code"
                type="text"
                className="mr-2 border rounded-md p-2"
              />
            </div>
            {/* <button className="btn btn-outline btn-xs">Validate Captha</button> */}
          </div>
          <Link to="/register">
            <button
              type="button"
              className="w-full  bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
            >
              Register
            </button>
          </Link>
          <div>
            <input
              disabled={disabled}
              type="Submit"
              value="Login"
              className="w-full  btn btn-primary text-white py-2 rounded-md "
            />
          </div>
        </form>

        <div className="mt-6 flex justify-center space-x-4 text-gray-600">
          <button className="hover:text-blue-500 focus:outline-none">
            <FaFacebook />
          </button>
          <button className="hover:text-blue-500 focus:outline-none">
            <FaTwitter />
          </button>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
