// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  // getDocs,
  // deleteDoc,
  // query,
  // startAfter,
  // limit,
  // orderBy,
  updateDoc,
} from "firebase/firestore";
function MyFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCUztnMz3wCezvs5GJpL7r7UIO6SX5CJAM",
    authDomain: "gymgit-51944.firebaseapp.com",
    projectId: "gymgit-51944",
    storageBucket: "gymgit-51944.appspot.com",
    messagingSenderId: "284989543508",
    appId: "1:284989543508:web:8eada88b9f9579764009c1",
    measurementId: "G-R3FXNWL3WC",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const me = {};

  const getWorkouts = async () => {
    const table = collection(db, "workoutData");
    return (await getDocs(table)).docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  };

  const addScheduleWorkout = async (data) => {
    const table = collection(db, "scheduleWorkoutTable");
    await setDoc(doc(table), data);
  };

  const getScheduleCount = async () => {
    const table = collection(db, "scheduleWorkoutTable");
    return (await getDocs(table)).size;
  };

  const getScheduleWorkouts = async () => {
    const table = collection(db, "scheduleWorkoutTable");
    return (await getDocs(table)).docs.map((doc) => {
      return (doc.data());
    });

  };

  const updateScheduleWorkout = async (id, data) => {
    const index = +id;
    const table = collection(db, "scheduleWorkoutTable");
    await updateDoc(doc(table, index), data);
  };

  me.getWorkouts = getWorkouts;
  me.addScheduleWorkout = addScheduleWorkout;
  me.getScheduleCount = getScheduleCount;
  me.getScheduleWorkouts = getScheduleWorkouts;
  me.updateScheduleWorkout = updateScheduleWorkout;
  return me;
}

export const firebase = new MyFirebase();
