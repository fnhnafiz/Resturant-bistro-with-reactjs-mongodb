import axios from "axios";
// import { useContext } from "react";

// import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  // const { logOut } = useContext(AuthContext) || {};
  const { logOut } = useAuth();
  // console.log();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      // console.log("request stop interceptor", token);
      // config.headers.autorization = `Bearer ${token}`;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("Error Cougth from interseptop", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
