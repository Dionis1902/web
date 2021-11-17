import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTXxWIzuhj6SCc47RSTjDSjJQIo9Kmzpo",
  authDomain: "weblab-4405f.firebaseapp.com",
  projectId: "weblab-4405f",
  storageBucket: "weblab-4405f.appspot.com",
  messagingSenderId: "242111722883",
  appId: "1:242111722883:web:9836eb2ee82b89c62bf2b6",
  measurementId: "G-QFK0C7DRPR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;