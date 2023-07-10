
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXzO-hoMknvtBq91A1PqN4ORmu3cVHKLw",
    authDomain: "netflix-video-clone.firebaseapp.com",
    projectId: "netflix-video-clone",
    storageBucket: "netflix-video-clone.appspot.com",
    messagingSenderId: "625808259179",
    appId: "1:625808259179:web:5b933c25f847fffe07192e"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;