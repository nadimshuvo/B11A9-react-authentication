import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../firebase.config";

const provider = new GoogleAuthProvider();

const getInitialBalance = () => {
  const stored = localStorage.getItem("user-balance");
  return stored ? parseFloat(stored) : 10000;
}

const AuthProvider = ({ children }) => {
  const [balance, setBalanceState] = useState(getInitialBalance);
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  

  useEffect(()=> {
    localStorage.setItem("user-balance", balance);
  },[balance]);

  const setBalance = (newValue) => {
    setBalanceState(newValue);
    localStorage.setItem("user-balance", newValue);
  }

  const signInwithGoogle = () => signInWithPopup(auth, provider);

  const createUserWithEmailPassword = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailPassword = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) =>
    updateProfile(auth.currentUser, updatedData);

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    balance,
    setBalance,
    user,
    setUser,
    loading,
    setloading,
    createUserWithEmailPassword,
    signInWithEmailPassword,
    updateUser,
    logOut,
    signInwithGoogle
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
