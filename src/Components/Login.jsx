import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Navbar from "./Navbar";
import auth from "../firebase/firebase.init";
import { useOutletContext } from "react-router-dom";

const Login = () => {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  
  const {loginData, setLoginData} = useOutletContext();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setLoginData(result.user);
      })
      .catch(error => {
        console.log(error)
        setLoginData(null)
      });
  };
  const handleGithubSignin = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setLoginData(result.user);
      })
      .catch(error => {
        console.log(error)
        setLoginData(null)
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoginData(null);
        console.log("Sing Out success")
      })
      .catch(error => {
        console.log(error);
        setLoginData(null);
      });
  };
  const heloUser = () =>{
    console.log(loginData.user.email)
  }
  console.log(loginData)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="flex flex-col items-center justify-between">
          {
            loginData ?
              <button onClick={handleSignOut} className="btn btn-outline btn-warning">Sign Out</button>
              :
              <div className="flex flex-col gap-6">
                <button onClick={handleGoogleSignin} className="btn btn-outline">Login with Google</button>
                <button onClick={handleGithubSignin} className="btn btn-outline">Login with Github</button>
              </div>
          }
          <button onClick={heloUser} className='btn btn-success my-12'>clickme!</button>
        </section>
      </main>
    </>
  );
};

export default Login;