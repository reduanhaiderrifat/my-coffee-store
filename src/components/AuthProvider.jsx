import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../components/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singinuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    createuser,
    singinuser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
