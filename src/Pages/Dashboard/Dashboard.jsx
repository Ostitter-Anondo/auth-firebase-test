import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import AuthContext from "../../AuthContext";

const Dashboard = () => {
  const { signOutUser, setLoginData } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
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
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="font-extrabold text-lime-300 text-4xl text-center my-6">
          Welcome to dashboard
        </h1>
        <section className="w-11/12 mx-auto grid grid-cols-5 gap-6">
          <aside className="col-span-1">
            <ul className="menu menu-lg bg-base-200 rounded-box w-56 gap-6">
              <li>
                <NavLink to='/dashboard'>User Profile</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/blogcontrol'>Manage Blog</NavLink>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-link btn-lg w-fit text-red-500"
                >
                  Sign Out...
                </button>
              </li>
            </ul>
          </aside>
          <div className="col-span-4">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
