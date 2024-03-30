import React from "react";
import DaysTab from "../components/DaysTab";
import PropTypes from "prop-types";
import { useLocation } from "react-router"; 

export default function ForkPage() {
  return (
    <>
      Working on it ...
    </>
  );
}

ForkPage.propTypes = {
  workoutData: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};
