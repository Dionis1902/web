import {initializeApp} from 'firebase/app';
import {getFirestore, collection, setDoc, doc} from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail, sendEmailVerification} from 'firebase/auth'
import {firebaseConfig} from "./config";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


async function logInWithEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return auth;
  } catch (err) {
    switch(err.message) {
      case 'Firebase: Error (auth/user-not-found).':
        return "Account does not exist."
      case 'Firebase: Error (auth/wrong-password).':
        return "Wrong password.";
      default:
        return "Some error."
    }
  }
}

async function registerWithEmailAndPassword(name, email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password).then(function(result) {
          updateProfile(result.user, {
          displayName: name
        });
        return result
    });
    const user = res.user;
    await setDoc(doc(collection(db,"users"), user.uid), {
      uid: user.uid,
      name,
      email,
    });
    return auth
  } catch (err) {
    switch(err.message) {
      case 'Firebase: Error (auth/email-already-in-use).':
        return "Email already exists."
      default:
        return "Some error."
    }
  }
}

async function sendPasswordReset(email){
  try {
    await sendPasswordResetEmail(auth, email);
    return "Message sent to your email."
  } catch (err) {
    switch(err.message) {
      case 'Firebase: Error (auth/user-not-found).':
        return "Account does not exist."
      default:
        return "Some error."
    }
  }
}

const logout = () => {
  signOut(auth).then(_ => window.location.reload(false));
};

export {auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout};