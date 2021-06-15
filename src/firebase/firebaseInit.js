import firebase from 'firebase/app';
import 'firebase'
import firebaseConfig from './firebaseConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
