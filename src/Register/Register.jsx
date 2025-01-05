import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaArrowCircleLeft,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaTwitter,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import SocialLogin from "../Components/SocialLogin/SocialLogin";

const Register = () => {
  const { handleCreateNewUser, updateUserProfile, logOut } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    handleCreateNewUser(data.email, data.password).then((result) => {
      const newUser = result.user;
      logOut();
      navigate("/login");
      console.log(newUser);
      updateUserProfile(data?.name, data?.photoURL).then(() => {
        const registerUser = {
          name: data.name,
          email: data.email,
        };
        // user save in database when new user register in the website;
        axiosPublic.post("/users", registerUser).then((res) => {
          console.log(res.data.insertedId);
          if (res.data.insertedId) {
            toast.success("Register Succesfully!!");
            reset;
          }
        });
      });
    });
  };
  //   console.log(watch("name"));

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="mb-4 space-y-5">
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-3 bg-gray-200 text-gray-600">
                <FaUser />
              </span>
              <input
                {...register("name", { required: true })}
                // required
                name="name"
                type="text"
                className="flex-1 p-2 rounded-r-md focus:outline-none"
                placeholder="Type Your Name"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-3 bg-gray-200 text-gray-600">
                <FaUser />
              </span>
              <input
                {...register("photoURL", { required: true })}
                // required
                name="photoURL"
                type="text"
                className="flex-1 p-2 rounded-r-md focus:outline-none"
                placeholder="Photo URL"
              />
              {errors.photoURL && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-3 bg-gray-200 text-gray-600">
                <FaUser />
              </span>
              <input
                {...register("email", { required: true })}
                // required
                name="email"
                type="email"
                className="flex-1 p-2 rounded-r-md focus:outline-none"
                placeholder="Type Your Email"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center border rounded-md shadow-sm">
              <span className="px-3 bg-gray-200 text-gray-600">
                <FaLock />
              </span>
              <input
                {...register("password", { required: true })}
                // required
                name="password"
                type="password"
                className="flex-1 p-2 rounded-r-md focus:outline-none"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="mt-4 flex j items-center text-sm"></div>
          {/* <button
            disabled={disable}
            type="submit"
            className="w-full  bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700"
          >
            LOGIN
          </button> */}
          <div>
            <input
              type="submit"
              value="Register"
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

export default Register;
