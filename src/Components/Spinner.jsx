import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
