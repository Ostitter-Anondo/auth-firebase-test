import { Link } from "react-router-dom";

import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const RegForm = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleReg = (event) => {
    event.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    const emailVal = event.target.email.value;
    const passwordVal = event.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(passwordVal)) {
      setErrorMsg(
        "password must be at least 6 characters long, and have one each of an uppercase, a lowercase, a numeric and a special character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((result) => {
        console.log(result);
        sendEmailVerification(auth.currentUser)
          .then(()=>{
            console.log("verification email sent");
          });
        setSuccessMsg("user registration successful, make sure to verify email");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <form className="w-4/5 mx-auto flex flex-col gap-6" onSubmit={(event)=>{handleReg(event)}}>
      <h3 className="font-semibold text-accent text-2xl">
        Hey there! Wanna join our club?
      </h3>
      <label className="input input-bordered flex items-center gap-2">
        <IoMailOutline />
        <input
          type="text"
          className="grow"
          placeholder="Email"
          name="email"
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
          {showPassword ? <FaRegEyeSlash />: <FaRegEye />}
        </button>
      </label>
      <p className="text-xs font-light text-base-content">
        Already have an account?{" "}
        <Link className="btn btn-link p-0" to="/login">
          Log in...
        </Link>
      </p>
      <p className="text-sm text-center text-red-600 font-light h-fit">
      {errorMsg && (
        <p className="text-sm text-center text-red-600 font-light h-fit">
          {errorMsg}
        </p>
      )}
      {successMsg && (
        <p className="text-sm text-center text-green-500 font-light h-fit">
          {successMsg}
        </p>
      )}
      </p>
      <button type="submit" className="btn btn-success">
        Sign-Up
      </button>
    </form>
  );
};

export default RegForm;
