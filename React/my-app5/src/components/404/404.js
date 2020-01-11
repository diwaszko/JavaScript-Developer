import React from "react";

const error404 = () => {
  return (
    <div>
      <h3>Error 404. Page is not exist.</h3>
      <p>
        Takiej strony nie ma.
      </p>
      <button><a href="/">Wróć do strony głównej</a></button>
    </div>
  )
};

export default error404;
