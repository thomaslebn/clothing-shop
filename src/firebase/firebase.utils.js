import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBGvXXUUnwgfOMtOLSj36Qe_DTfyM9YV84",
  authDomain: "clothing-shop-69d4a.firebaseapp.com",
  projectId: "clothing-shop-69d4a",
  storageBucket: "clothing-shop-69d4a.appspot.com",
  messagingSenderId: "104341594979",
  appId: "1:104341594979:web:e113c116f802a957a16956",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user is not sign-in, return.
  if (!userAuth) return;

  // get the queryReference - object that represents the “current” place
  // in the database that we are querying. The object does not have
  // the actual data of the collection or document.
  // It instead has the method to get the Snapshot object
  // which gives us the data we are looking for.
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // We get the snapshotObject from the referenceObject
  // using the .get() method.
  const snapShot = await userRef.get();

  // if no snapShot exists, create a new one (here a new user).
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user ", err);
    }
  }

  return userRef;
};

export default firebase;
