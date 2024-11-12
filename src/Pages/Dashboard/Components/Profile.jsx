import { useContext } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import AuthContext from "../../../AuthContext";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { loginData } = useContext(AuthContext);
  const navigate = useNavigate();

  const updatePhoto = (event) =>{
    event.preventDefault();
    const photo = event.target.photoURL.value;
    updateProfile(auth.currentUser, {photoURL:photo})
      .then(() => {
        console.log("Photo Updated");
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const updateUName = (event) =>{
    event.preventDefault();
    const name = event.target.userName.value;
    updateProfile(auth.currentUser, {displayName:name})
      .then(() => {
        console.log("Name Updated");
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <img
          src={loginData.photoURL}
          alt="Display Image Not Found"
          className="h-32"
        />
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Username:</th>
                <td>
                  {loginData.displayName ? (
                    loginData.displayName
                  ) : (
                    <span className="text-error">{"Username Not Found"}</span>
                  )}
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Email:</th>
                <td>{loginData.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <form onSubmit={(event) => {updatePhoto(event)}} className="flex flex-col gap-3 col-span-2 lg:col-span-1">
          <h4 className="font-semibold text-lg">Change Display Photo:</h4>
          <label className="input input-bordered flex items-center gap-2">
            <IoCameraOutline />
            <input
              type="text"
              className="grow"
              name="photoURL"
              placeholder="Display Photo URL"
            />
            <button type="submit" className="btn btn-ghost btn-sm">
              Change
            </button>
          </label>
        </form>
        <form onSubmit={(event) => {updateUName(event)}} className="flex flex-col gap-3 col-span-2 lg:col-span-1">
          <h4 className="font-semibold text-lg">Change Username:</h4>
          <label className="input input-bordered flex items-center gap-2">
            <IoPersonOutline />
            <input
              type="text"
              className="grow"
              name="userName"
              placeholder="New Username"
            />
            <button type="submit" className="btn btn-ghost btn-sm">
              Change
            </button>
          </label>
        </form>
      </div>
    </>
  );
};

export default Profile;
