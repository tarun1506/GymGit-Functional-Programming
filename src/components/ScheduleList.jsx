import React from "react";
import PropTypes from "prop-types";

export default function ScheduleList({ scheduleButtons }) {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Schedule Lists
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {scheduleButtons}
        </div>
      </div>
    </div>
  );
}

ScheduleList.propTypes = {
  scheduleButtons: PropTypes.array.isRequired,
};
