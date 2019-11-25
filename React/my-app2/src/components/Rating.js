import React from "react";
import star from "../star.svg"; // importuje się jako obrazek
// import { ReactComponent as Star } from "../star.svg"; // importuje się jak komponent i można użyć jako komponentu <Star/>

function Rating(props) {
  return Array.from(Array(props.value)).map((i, index) => (
    <img key={index} src={star} />
  ));
}

export default Rating;
