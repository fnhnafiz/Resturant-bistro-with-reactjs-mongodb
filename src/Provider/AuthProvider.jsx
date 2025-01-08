import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firsebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  // const navigate = useNavigate();

  const handleGoogleSign = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleCreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    // navigate("/login");
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      if (currentuser) {
        const userInfo = { email: currentuser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          // console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });
    return () => {
      return unSubscrive();
    };
  }, [axiosPublic]);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleCreateNewUser,
    handleSignInUser,
    logOut,
    updateUserProfile,
    handleGoogleSign,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
