import React from "react";

const Loader = () => {
  return (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  );
};

export default Loader;
