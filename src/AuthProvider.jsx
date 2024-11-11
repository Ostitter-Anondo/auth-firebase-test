import { useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';

const AuthProvider = ({children}) => {
  const [authInfo, setAuthInfo] = useState(null);
  const [loginData, setLoginData] = useState(null)
  const [regData, setRegData] = useState(null)
  const authValues = {
    mojarkotha: "mojar kotha",
    authInfo: authInfo,
    setAuthInfo: setAuthInfo,
    loginData: loginData,
    setLoginData: setLoginData,
    regData: regData, 
    setRegData: setRegData,
  }
  
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