import { useContext, useEffect } from "react";
import { AuthContext } from "../FirebaseAuthProvider/FirebaseProvider";

const Profile = () => {
useEffect(() => {
document.title = "Profile";
})
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex lg:justify-evenly gap-6 items-center">
      <div className="h-full font-bold"><h1>Name : {user?.displayName}</h1>
      <h1> Email : {user.email}</h1></div>
      <img src={user.photoURL} className="h-[200px] mt-6" />
    </div>
  );
};

export default Profile;
