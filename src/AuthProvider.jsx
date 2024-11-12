import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase/firebase.init";

const AuthProvider = ({children}) => {
  const [authInfo, setAuthInfo] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(true);

  const mojarkotha = "mojar Kotha";

  const signInMailPass = (mail, pass) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, mail, pass);
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const authValues = {
    mojarkotha,
    loading,
    authInfo,
    setAuthInfo,
    loginData,
    setLoginData,
    signInMailPass,
    signOutUser,
  };
  
  useEffect(() => {
    const loginCheck = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        console.log('currently logged in user', currentUser);
        setLoginData(currentUser);
        setLoading(false)
      }
      else {
        console.log('not logged in');
      }
    });

    return () => {
      loginCheck();
    }
  })
  

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;