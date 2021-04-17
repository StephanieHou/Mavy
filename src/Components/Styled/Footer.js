import styled from "styled-components";

const FooterDiv = styled.div`
  background: ${({ background }) => background || `white`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
`;

const Footer = ({ background, width, height }) => {
  return <FooterDiv background={background} width={width} height={height} />;
};

export default Footer;