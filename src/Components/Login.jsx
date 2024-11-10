import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Navbar from "./Navbar";
import auth from "../firebase/firebase.init";
import { Outlet, useOutletContext } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const { loginData, setLoginData, regData, setRegData } = useOutletContext();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLoginData(result.user);
      })
      .catch((error) => {
        console.log(error);
        setLoginData(null);
      });
  };
  const handleGithubSignin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setLoginData(result.user);
      })
      .catch((error) => {
        console.log(error);
        setLoginData(null);
      });
  };
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
    <>
      <header>
        <Navbar setLoginData={setLoginData} loginData={loginData} />
      </header>
      <main className="p-1 md:p-3 lg:p-6 xl:p-12">
        <section className="flex flex-col items-center justify-between">
          {loginData ? (
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-warning"
            >
              Sign Out
            </button>
          ) : (
            <div className="flex flex-col gap-6">
              <button onClick={handleGoogleSignin} className="btn btn-outline">
              <FaGoogle /> Login with Google
              </button>
              <button onClick={handleGithubSignin} className="btn btn-outline">
              <FaGithub /> Login with Github
              </button>
            </div>
          )}
        </section>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 justify-evenly items-center my-12">
          <hr className="w-4/5 lg:w-2/5" />
          <p className="text-sm">or log in with an account</p>
          <hr className="w-4/5 lg:w-2/5" />
        </div>
        <section className="lg:w-5/12 mx-auto my-12">
          <Outlet context={{loginData: loginData, setLoginData: setLoginData, regData: regData, setRegData:setRegData}} />
        </section>
      </main>
    </>
  );
};

export default Login;
