
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/compat/app';




const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyA8t8aA6Jkzc-7f2bL1wkpHv7Rbku3KIl0",
 authDomain: "e-clone-d2aaa.firebaseapp.com",
 databseURL: "https://e-clone-d2aaa.firebaseio.com",
 projectId: "e-clone-d2aaa",
 storageBucket: "e-clone-d2aaa.appspot.com",
 messagingSenderId: "120821829619",
 appId: "1:120821829619:web:c827d189e8e3ce11c2cc86",
 measurementId: "G-TR2D6B2KT7"
});


const auth = firebase.auth();
export { auth };