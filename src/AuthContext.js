// AuthContext.js
import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import bcrypt from 'bcryptjs-react'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState('');


  const login = (email, password, setEmail, setPassword, navigate) => {

  //  setIsloggedIn(true);
  const userData = JSON.parse(localStorage.getItem("users"));
  const user = userData.find((user) => user.email === email);
  console.log(user);
  //setting logged in user in local storage

  if (user !== undefined) {
    const loggedInuser = {
      email: email,
      password: user.password,
    };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInuser));

    console.log(password);
    console.log(user.password);
    if (password == user.password) {
      setEmail(email);
      setPassword(password);
      toast.success("logged in successfully");
      navigate("/product-list");
    } else {
      toast.error("password is incorrect");
    }
  } else {
    toast.error("email is not registered");
  }

  };




  const logout = () => {
    setIsloggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isloggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
// export const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

export default AuthContext;