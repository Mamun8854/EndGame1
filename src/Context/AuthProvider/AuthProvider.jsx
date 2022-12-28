import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  //   new user register with email and password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // google login
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   login with email / password
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // Sign Out user
  const logOut = () => {
    return signOut(auth);
  };

  //   update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  const authInfo = {
    registerUser,
    googleLogin,
    signIn,
    logOut,
    updateUserProfile,
    user,
    Loading,
    auth,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
