import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Main, Navbar, Section, Footer } from "../../Styled";

const Container = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  return (
    <Main className="Account-Dashboard">
      <Navbar />
    </Main>
  );
};

export default Dashboard;
