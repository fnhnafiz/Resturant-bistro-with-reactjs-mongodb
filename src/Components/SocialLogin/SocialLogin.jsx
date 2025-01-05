import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { handleGoogleSign } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSocialLogin = () => {
    handleGoogleSign().then((res) => {
      console.log(res.user);
      const user = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", user).then((res) => {
        console.log(res.data);
        toast.success("Login Successfully");
        navigate("/");
      });
    });
  };

  return (
    <div>
      <button
        onClick={handleSocialLogin}
        className="hover:text-blue-500 focus:outline-none"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
