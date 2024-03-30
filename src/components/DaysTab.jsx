import React from "react";
import PropTypes from "prop-types";
import WorkoutTable from "./WorkoutTable";

export default function DaysTab({ workoutData, activeTab, handleTabClick }) {
  const renderTabContent = () => {
    const selectedDay = workoutData.find((day) => day.day === activeTab);
    return <WorkoutTable dayWorkout={selectedDay?.data || []} />;
  };
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {workoutData.map((day) => (
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
    </>
  );
}

DaysTab.propTypes = {
  workoutData: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};
