import React from "react";
import styled from "styled-components";
import { Main, Navbar, Footer, AnimatedText } from "../Styled";

const Container = styled.div`
  width: 100%;
`;

const Section = styled.div`
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  background: ${({ background }) => background || `white`};
  padding: ${({ padding }) => padding || `10px 10%`};
  display: ${({ display }) => display || `flex`};
`;

const Middle = styled.div`
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  background: ${({ background }) => background || `transparent`};
  padding: ${({ padding }) => padding || `0px`};
  display: ${({ display }) => display || `grid`};
  grid-auto-flow: column;
  grid-template-columns: 50% 50%;
  column-gap: 1rem;
  align-items: center;
`;

const MiddleHeader = styled.h1`
  color: var(--color-5);
  margin: 0px;
`;

const MiddleText = styled.p`
  color: white;
  font-size: 18px;
`;

const MiddleImg = styled.div`
  background: var(--color-5);
  height: 300px;
  text-align: center;
  width: 300px;
  margin: 0 auto;
  border-radius: 5px;
`;

const ArrowDown = styled.div`
  width: 35px;
  height: 35px;
  bottom: 10%;
  margin: -20px 0 0 -20px;
  -webkit-transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 5px var(--color-1) solid;
  border-bottom: 5px var(--color-1) solid;
  position: absolute;
  border-radius: 3px;
  left: 50%;

  &:before{
    content: "";
    width: 17px;
    height: 17px;
    bottom: 10%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 4px var(--color-1) solid;
    border-bottom: 4px var(--color-1) solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: downArrow;
    position: absolute;
    border-radius: 3px;
    left: 50%;
  }
`;

const Home = () => {
  return (
    <Main className="Home">
      <Navbar />
      <Container className="Home-Wrapper">
        <Section
          background="white"
          width="100%"
          height="90vh"
          padding="10px 9%"
          display="block"
        >
          <AnimatedText text={"Become"} fontsize="6rem" margintop="40px" />
          <AnimatedText text={"Money"} fontsize="9rem" margintop="5px" />
          <AnimatedText text={"Savvy"} fontsize="13rem" />
          <ArrowDown />
        </Section>
        <Section
          background="var(--color-1)"
          width="100%"
          height="80vh"
          padding="10px 15%"
        >
          <Middle>
            <MiddleImg>
              <p>Image</p>
            </MiddleImg>
            <div>
              <MiddleHeader>
                Personalized <br /> Your Budget
              </MiddleHeader>
              <MiddleText>
                The way we like to love our lives are all different. Why not
                budget our expenses differently as well? With Mavy, you can
                personalize how you want your expenses to be categories and pull
                unique metrics made for you.
              </MiddleText>
            </div>
          </Middle>
        </Section>
        <Footer />
      </Container>
    </Main>
  );
};

export default Home;
