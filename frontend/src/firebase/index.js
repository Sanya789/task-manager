import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSAnOvs6cgNFarBhwUR8rjBEMRHpuBZ_U",
  authDomain: "todo-app-56163.firebaseapp.com",
  projectId: "todo-app-56163",
  storageBucket: "todo-app-56163.appspot.com",
  messagingSenderId: "273148987913",
  appId: "1:273148987913:web:25f631a5d7d35dd1c686d8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
