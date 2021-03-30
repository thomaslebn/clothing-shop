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

export default firebase;
