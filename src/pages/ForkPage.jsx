import React, { useEffect, useState } from "react";
import NavBar from "../fragments/NavBar";
import Footer from "../fragments/Footer";
import { firebase } from "../model/MyFirebase";
import EditingWorkoutTable from "../components/EditingWorkoutTable";
import ScheduleList from "../components/ScheduleList";

export default function ForkPage() {
  const [forkedWorkoutData, setForkedWorkoutData] = useState([]);
  const [activeTab, setActiveTab] = useState("Monday");
  const [scheduleCount, setScheduleCount] = useState(0);
  const [scheduleButtons, setScheduleButtons] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState(0);

  const handleSubmit = async () => {
    const newSchedule = {
      id: scheduleCount + 1,
      data: forkedWorkoutData,
    };
    await firebase.addScheduleWorkout(newSchedule);
    setScheduleCount(scheduleCount + 1);
  };

  const handleSave = async () => {
    try {
      if (!currentSchedule) {
        alert("Please select a schedule");
        return;
      }
  
      console.log("currentSchedule", currentSchedule);
  
      // Assuming forkedWorkoutData is an object
      await firebase.updateScheduleWorkout(String(currentSchedule), {
        id: currentSchedule,
        data: forkedWorkoutData,
      });
  
      alert("Schedule saved successfully");
    } catch (error) {
      console.error("Error updating schedule:", error);
      alert("Error updating schedule. Please try again.");
    }
  };

  // const handleSave = async () => {
  //   currentSchedule == 0
  //     ? alert("Please select a schedule")
  //     : console.log("currentSchedule", currentSchedule);
  //   await firebase.updateScheduleWorkout(currentSchedule, {
  //     id: currentSchedule,
  //     data: forkedWorkoutData,
  //   });
  //   alert("Schedule saved successfully");
  // };

  const handleScheduleClick = async (id) => {
    setCurrentSchedule(id);
    const selctedScheduleData = await firebase.getScheduleWorkouts();
    const selectedSchedule = selctedScheduleData.find(
      (schedule) => schedule.id === id
    );
    setForkedWorkoutData(selectedSchedule.data);
  };

  const handleEdit = (index, key, value) => {
    const updatedWorkoutData = forkedWorkoutData.map((day) => {
      if (day.day === activeTab) {
        return {
          ...day,
          data: day.data.map((item, i) =>
            i === index
              ? {
                ...item,
                [key]: value,
              }
              : item
          ),
        };
      }
      return day;
    });
    setForkedWorkoutData(updatedWorkoutData);
  };

  const renderTabContent = () => {
    const selectedDay = forkedWorkoutData.find((day) => day.day === activeTab);

    return (
      <EditingWorkoutTable
        dayWorkout={selectedDay?.data || []}
        handleEdit={handleEdit}
      />
    );
  };

  const handleTabClick = (day) => {
    setActiveTab(day);
  };

  useEffect(() => {
    const getWorkoutData = async () => {
      const data = await firebase.getWorkouts();
      setForkedWorkoutData(data);
    };
    const getScheduleCount = async () => {
      const count = await firebase.getScheduleCount();
      setScheduleCount(count);
    };

    const createScheduleButtons = () => {
      const buttons = [];
      for (let i = 1; i <= scheduleCount; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handleScheduleClick(i)}
            className="btn btn-primary"
            style={{
              display: "block",
              marginBottom: "10px",
              alignSelf: "flex-start",
            }}
          >
            Schedule {i}
          </button>
        );
      }
      setScheduleButtons(buttons);
    };

    getWorkoutData();
    getScheduleCount();
    createScheduleButtons();
  }, [scheduleCount]);

  return (
    <>
      <NavBar />
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {forkedWorkoutData.map((day) => (
            <button
              key={day.day}
              className={`nav-link ${activeTab === day.day ? "active" : ""}`}
              onClick={() => handleTabClick(day.day)}
            >
              {day.day}
            </button>
          ))}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {renderTabContent()}
      </div>

      <button
        className="btn btn-success me-2"
        type="button"
        onClick={handleSave}
      >
        Save
      </button>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={handleSubmit}
      >
        Save As New Schedule
      </button>

      <br />
      <br />
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        View Schedule
      </button>
      <ScheduleList scheduleButtons={scheduleButtons} />
      <Footer />
    </>
  );
}
