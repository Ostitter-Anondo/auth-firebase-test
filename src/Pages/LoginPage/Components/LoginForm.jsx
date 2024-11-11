import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoKeyOutline, IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import AuthContext from "../../../AuthContext";

const LoginForm = () => {
  const { loginData, setLoginData } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    const emailVal = event.target.email.value;
    const passwordVal = event.target.password.value;

    signInWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((result) => {
        console.log(result.user);
        setLoginData(result.user);
        if (!result.user.emailVerified) {
          setErrorMsg("email was not verified");
        } else {
          setSuccessMsg("log in successful");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const handleForgot = () =>{
    const emailVal = emailRef.current.value;
    if (!emailVal){
      setErrorMsg("please enter a valid email address in the email field");
    }
    else {
      sendPasswordResetEmail(auth, emailVal)
        .then(()=>{
          setErrorMsg("password reset email sent")
        });
    }
  };

  return (
    <form
      onSubmit={(event) => {
        handleLogin(event);
      }}
      className="w-4/5 mx-auto flex flex-col gap-6"
    >
      <h3 className="font-semibold text-accent text-2xl">
        Welcome back! Login here
      </h3>
      <label className="input input-bordered flex items-center gap-2">
        <IoMailOutline />
        <input
          type="text"
          className="grow"
          placeholder="Email"
          name="email"
          ref={emailRef}
          required
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <IoKeyOutline />
        <input
          type={showPassword ? "text" : "password"}
          className="grow"
          placeholder="password"
          name="password"
          required
        />
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className="btn btn-circle btn-ghost btn-sm"
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </label>
      <button onClick={handleForgot} className="btn btn-link p-0 w-fit min-h-0 h-fit" to="/login/register">
        Forgot password
      </button>
      <p className="text-xs font-light text-base-content">
        Don&apos;t Have an account?{" "}
        <Link className="btn btn-link p-0 min-h-0 h-fit" to="/login/register">
          Register...
        </Link>
      </p>
      {errorMsg && (
        <p className="text-sm text-center text-red-600 font-light h-fit">
          {errorMsg}
        </p>
      )}
      {successMsg && (
        <p className="text-sm text-center text-green-500 font-light h-fit">
          {successMsg}, welcome {loginData.email}
        </p>
      )}
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
