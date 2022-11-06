import React, { useState } from "react";
// import Button from "@material-ui/core/Button";

const ErrorPage = () => {
  const [count, setCount] = useState(5);

  const errorPageClickHandler = e => {
    e.preventDefault();
    setCount(count - 1);
  };

  if (count <= 0) {
    throw new Error("ErrorPage threw an error!");
  }

  return (
    <button
      color="primary"
      variant="outlined"
      onClick={e => errorPageClickHandler(e)}
    >
      Throw Error in {count} clicks.
    </button>
  );
};

export default ErrorPage;
