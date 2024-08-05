import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase";
const signup = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    console.log("User from signup:", user); 
    // await sendEmailVerification(user);
    // console.log("Verification email sent to your inbox");
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('This email address is already in use.');
    } else {
      console.log("An error occurred in signup:", error.message);
      throw error;
    }
  }
};

const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials.user;
  } catch (error) {
    throw error;
  }
};
export { signup, login };
