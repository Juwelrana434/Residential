import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "./../Firebase/Firebase.config";
import Result from "postcss/lib/result";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    logOut,
    googleLogin,
    gitHubLogin,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      if (CurrentUser) {
        setUser(CurrentUser);
        
      } else {
      setUser(null);
      }
    });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default FirebaseProvider;
