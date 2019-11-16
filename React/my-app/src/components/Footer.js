import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="jumbotron">
      <Container>
        <p>
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </p>
        <p>
          New to Bootstrap?
          <a href="https://getbootstrap.com/">Visit the homepage</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
