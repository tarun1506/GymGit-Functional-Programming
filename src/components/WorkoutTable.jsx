import React from "react";
import PropTypes from "prop-types";

export default function WorkoutTable({dayWorkout}) {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Workout</th>
          <th scope="col">Reps / Count</th>
        </tr>
      </thead>
      <tbody>
        {dayWorkout.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.workout}</td>
            <td>{item.reps}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

WorkoutTable.propTypes = {
  dayWorkout: PropTypes.array.isRequired,
};
