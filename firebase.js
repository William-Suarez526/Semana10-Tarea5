// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

import {
  getFirestore, 
  collection, 
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  uptadeDoc
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcwTkX3YyQ0xbzfNolnOH9uj3OZWyjj0",
  authDomain: "fir-javascript-crud-cff0a.firebaseapp.com",
  projectId: "fir-javascript-crud-cff0a",
  storageBucket: "fir-javascript-crud-cff0a.appspot.com",
  messagingSenderId: "252168665353",
  appId: "1:252168665353:web:91f76c29d14e29ee44fbd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore();

export const saveTask = (title, description)=>
  addDoc(collection(db, "tasks"),{title,description });

export const getTasks = () => getDocs (collection(db, "tasks"));

export const onGetTasks = (callback) => 
onSnapshot(collection(db,"tasks"), callback);
export const deleteTask = id => deleteDoc (doc(db, "tasks", id));
export const getTask = id => getDoc(doc(db, "tasks",id));
export const updateTask = (id,newFields)=> uptadeDoc(doc(db, "tasks", id),newFields);
