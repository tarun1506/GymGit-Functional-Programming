import React from "react";
import PropTypes from "prop-types";

export default function EditingWorkoutTable({dayWorkout, handleEdit}) {
  
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
            <td>
              <input
                type="text"
                value={item.workout}
                onChange={(e) => handleEdit(index, "workout", e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={item.reps}
                onChange={(e) => handleEdit(index, "reps", e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

EditingWorkoutTable.propTypes = {
  dayWorkout: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
