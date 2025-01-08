import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  // console.log(logOut, "form six");
  return auth;
};

export default useAuth;
