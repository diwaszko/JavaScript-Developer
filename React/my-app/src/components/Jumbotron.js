import React from "react";
import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import Container from "./Container";

function Jumbotron() {
  return (
    <section className="jumbotron text-center">
      <Container>
        <SectionTitle name="Section Title" />
        <SectionParagraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </SectionParagraph>

        <p>
          <button className="btn btn-primary my-2">Show more</button>
        </p>
      </Container>
    </section>
  );
}

export default Jumbotron;
