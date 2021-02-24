import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDpsAEzw12M8Rgkof4DkOl-4RKJBUPu3Pw",
  authDomain: "wireleib-80491.firebaseapp.com",
  projectId: "wireleib-80491",
  storageBucket: "wireleib-80491.appspot.com",
  messagingSenderId: "1087205710248",
  appId: "1:1087205710248:web:002c5f93479bf7b686259d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
