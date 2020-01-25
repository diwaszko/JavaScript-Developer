import React from "react";
import HeaderBig from "../HeaderBig/HeaderBig";
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Container from "../Container/Container";

const Error404Page = () => {
  return (
    <div>
      <Container>
        <HeaderBig name="Error 404. Page is not exist." />
        <p>
          <HeaderSmall name="Takiej strony nie ma."/>
        </p>
        <a href="/">Wróć do strony głównej</a>
      </Container>
    </div>
  )
};

export default Error404Page;
