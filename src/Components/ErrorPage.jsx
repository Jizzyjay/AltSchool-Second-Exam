import React, { useState } from "react";
import "../Styles/Error.css";

const ErrorPage = () => {
  const [count, setCount] = useState(7);

  const errorPageClickHandler = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  if (count <= 0) {
    throw new Error("ErrorPage threw an error!");
  }

  return (
    <div className="Error-container">
      <button
        color="primary"
        variant="outlined"
        className="btn"
        onClick={(e) => errorPageClickHandler(e)}
      >
        Throw Error in {count} clicks.
      </button>
    </div>
  );
};

export default ErrorPage;