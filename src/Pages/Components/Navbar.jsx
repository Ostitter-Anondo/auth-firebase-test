import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import PropTypes from "prop-types";

const Navbar = ({ setLoginData, loginData }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoginData(null);
        console.log("Sing Out success");
      })
      .catch((error) => {
        console.log(error);
        setLoginData(null);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">GenjiBajar</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-3 px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {loginData ? (
              <button onClick={handleSignOut} className="">
                Sign Out
              </button>
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
