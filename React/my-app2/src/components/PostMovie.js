import React from "react";
import Rating from "./Rating";
import LanguageContext from "../LanguageContext";


function PostMovie(props) {
  const lang = useContext(LanguageContext);
  
  const onVoteClick = (i) => {
    alert("Dzięki, Twoja ocena to: " + i);
  };

  return (
    <div>
      <h1>{props.title[lang]}</h1>
      <img src={props.poster}></img>
      <p>
        Ocena: <Rating value={props.rating} />
      </p>
      <p>
        Twoja Ocena: <Rating value={10} onClick={onVoteClick} />
      </p>
      <div>{props.description[lang]}</div>
    </div>
  );
}

export default PostMovie;
