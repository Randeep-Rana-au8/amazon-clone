import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAivCAgoBcFgdi2t8QEYPzoWG92TiMHk5E",
  authDomain: "my--clone-59e83.firebaseapp.com",
  databaseURL: "https://my--clone-59e83.firebaseio.com",
  projectId: "my--clone-59e83",
  storageBucket: "my--clone-59e83.appspot.com",
  messagingSenderId: "253619165459",
  appId: "1:253619165459:web:78142ed628f052ebd722e6",
  measurementId: "G-4SGF83V1TT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
