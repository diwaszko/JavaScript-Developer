import React from "react";
import HeaderBig from "../HeaderBig/HeaderBig";
import HeaderSmall from "../HeaderSmall/HeaderSmall";
import Container from "../Container/Container";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

const HomePage = () => (
  <div>      
    <Container>
      <HeaderBig name="Welcome to our store" />
      <HeaderSmall name="Desktops" />
      <FeaturedProducts category="desktop"/>
      <HeaderSmall name="Tablets" />
      <FeaturedProducts category="tablet" />
    </Container>
  </div>
);

export default HomePage;
