import React from "react";
import Navbar from "../components/Navbar/Navbar";

import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <h1>Platzi and Next.js!</h1>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: red;
`;
