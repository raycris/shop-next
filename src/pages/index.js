import React from "react";
import Navbar from "../components/Navbar/Navbar";

import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <h1>Home</h1>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
margin: 0;
padding: 0;
background-color: red;
`