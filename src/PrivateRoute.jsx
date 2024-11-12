import { useContext } from "react";
import AuthContext from "./AuthContext";


import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const { loginData, loading } = useContext(AuthContext)
  
  if (loading){
    return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-ball loading-lg"></span></div>
  }

  if (loginData) {
    return children;
  }
  
  return (
    <Navigate to="/login" />
  );
};

PrivateRoute.propTypes = {
  children : PropTypes.node,  
};

export default PrivateRoute;
