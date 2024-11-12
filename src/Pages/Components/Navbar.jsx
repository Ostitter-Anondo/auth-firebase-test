import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../../AuthContext";

const Navbar = () => {
  const { loginData } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          GenjiBajar
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-3 px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            {loginData ? (
              <NavLink to="/dashboard">Dashboard</NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setLoginData: PropTypes.func,
  loginData: PropTypes.object,
};

export default Navbar;
