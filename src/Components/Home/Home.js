import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Main, Navbar, Section, Footer } from "../Styled";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Main className="Home">
      <Navbar />
      <Container className="Home-Wrapper">
        <Section background="white" width="100%" height="90vh">
          <p>Header</p>
        </Section>
        <Section background="var(--color-1)" width="100%" height="100vh" >
          <p>Middle</p>
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
