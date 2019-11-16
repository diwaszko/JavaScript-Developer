import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Footer from "./components/Footer";
import Text from "./components/Text";
import { Image, ImageSVG } from "./components/Image";

function App() {
  // 3 sposoby wyświetlania elementów: 1. opakowane w diva, 2. React.Fragment (niewidoczny tag), 3. jako tag <>
  return (
    <div>
      <Header />
      <Jumbotron />
      <About title="About" />
      <Footer />
    </div>

    // 1 sposob:

    // <div>
    //   <h1>Hello World!</h1>
    //   <Text />
    //   <Image />
    //   <ImageSVG />
    // </div>

    // 2 sposob:

    // <React.Fragment>
    //   <h1>Hello World!</h1>
    //   <Text />
    //   <Image />
    // </React.Fragment>

    // 3 sposob:

    // <>
    //   <h1>Hello World!</h1>
    //   <Text />
    //   <Image />
    // </>
  );
}

export default App;
