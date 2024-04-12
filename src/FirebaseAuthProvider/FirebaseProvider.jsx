import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from './../Firebase/Firebase.config';
import Result from "postcss/lib/result";
export const AuthContext = createContext(null)


const FirebaseProvider = ({children}) => {
// const [user, setUser] = useState("user to nai")
const registerUser =(email, password) => {
 createUserWithEmailAndPassword(auth,email, password)
 .then(result => console.log(result.user))
 
}
const loginUser =(email, password) => {
 signInWithEmailAndPassword(auth, email, password)
 .then(result => console.log(result.user))
 
}
const authInfo ={
    registerUser,
    loginUser
    }
    return (
       <div>
       <AuthContext.Provider value={authInfo}>
       {children}
   </AuthContext.Provider>
   </div>
    );
};

export default FirebaseProvider;