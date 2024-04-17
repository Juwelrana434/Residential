
import { useContext } from "react";
import { AuthContext } from "../FirebaseAuthProvider/FirebaseProvider";
import { Navigate } from "react-router-dom";
const ProtectedRout = ({children}) => {
console.log(children);
const { user } = useContext(AuthContext);
  console.log(user);
  if (user) {
  return children
  }
   return <Navigate to="/login"></Navigate> 
    
};

export default ProtectedRout;