import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "",
  authDomain: "samplevuefirebase.firebaseapp.com",
  databaseURL: "https://samplevuefirebase.firebaseio.com",
  projectId: "",
  storageBucket: "samplevuefirebase.appspot.com",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });
