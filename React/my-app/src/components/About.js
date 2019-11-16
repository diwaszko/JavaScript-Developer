import React from "react";
import SectionParagraph from "./SectionParagraph";

function About(props) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h1 className="jumbotron-heading">{props.title}</h1>
            <SectionParagraph>
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </SectionParagraph>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
