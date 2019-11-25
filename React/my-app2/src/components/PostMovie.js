import React from "react";
import Rating from "./Rating";
function PostMovie(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.poster}></img>
      <p>
        Ocena: <Rating value={props.rating} />
      </p>
      <div>{props.description}</div>
    </div>
  );
}

export default PostMovie;
