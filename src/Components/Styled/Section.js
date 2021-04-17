import React from "react";
import styled from "styled-components";

const SectionDiv = styled.div`
  background: ${({ background }) => background || `white`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
`;

const Section = ({ background, width, height }) => {
  return <SectionDiv background={background} width={width} height={height} />;
};

export default Section;
