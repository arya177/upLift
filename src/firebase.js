import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbklhELxUbp-YsVP6x3joGB_vIkdY47zg",
  authDomain: "uplift-4e6f4.firebaseapp.com",
  projectId: "uplift-4e6f4",
  storageBucket: "uplift-4e6f4.appspot.com",
  messagingSenderId: "14781940228",
  appId: "1:14781940228:web:9a7975457eb26051d7ab51",
  measurementId: "G-X9D2PD48G3",
  databaseURL: "https://uplift-4e6f4-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);


export {app,auth,provider,database}