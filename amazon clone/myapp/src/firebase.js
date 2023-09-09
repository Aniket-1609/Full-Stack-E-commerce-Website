import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAFqcY_p1xFmnECSNhvQ3jS_yEK2NHBM8w",
  authDomain: "fir-724aa.firebaseapp.com",
  projectId: "fir-724aa",
  storageBucket: "fir-724aa.appspot.com",
  messagingSenderId: "82800274845",
  appId: "1:82800274845:web:9f2a50554652dea5a6d374",
  measurementId: "G-B5VJF3XEW8"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();

export {db,auth};
 