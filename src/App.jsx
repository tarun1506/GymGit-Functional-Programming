import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./fragments/NavBar";
import Footer from "./fragments/Footer";
import DaysTab from "./components/DaysTab";
import { firebase } from "./model/MyFirebase";

import { Link } from "react-router-dom";

export default function App() {
  const [workoutData, setWorkoutData] = useState([]);
  const [activeTab, setActiveTab] = useState("Monday");

  const handleTabClick = (day) => {
    setActiveTab(day);
  };

  useEffect(() => {
    const getWorkoutData = async () => {
      const data = await firebase.getWorkouts();
      setWorkoutData(data);
    };
    getWorkoutData();
  }, []);

  return (
    <>
      <NavBar />
      <DaysTab
        workoutData={workoutData}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <Link
        to={{
          pathname: "/forkpage",
          state: {
            workoutData: workoutData,
            activeTab: activeTab,
            handleTabClick: handleTabClick,
          },
        }}
        className="btn btn-outline-primary"
      >
        Fork
      </Link>
      <Footer />
    </>
  );
}
