import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Images/Logo.png";

const FooterDiv = styled.div`
  background: ${({ background }) => background || `var(--color-5)`};
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `auto`};
  text-align: center;
  padding: 15px 0px;
`;

const LogoText = styled.h1`
  color: var(--color-1);
  font-size: 2rem;
  font-family: "MontserratSubrayada-Regular";
  margin: 0px;
`;

const Image = styled.img`
  height: 75px;
  margin-bottom: -10px;
`;

const LinkDiv = styled.div``;

const LinkWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 300px;
  margin: 0 auto;
`;

const Links = styled.p`
  padding: 0.5rem;
  color: var(--color-1);
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px;
`;

const Footer = ({ background, width, height }) => {
  return (
    <FooterDiv
      background={background}
      width={width}
      height={height}
      className="Footer"
    >
      <Image src={Logo} alt="Mavy Footer Logo" />
      <LogoText>MAVY</LogoText>
      <LinkDiv>
        <LinkWrapper>
          <Link to="/about">
            <Links>About Mavy</Links>
          </Link>
          <Link to="/contact">
            <Links>Contact Us</Links>
          </Link>
        </LinkWrapper>
      </LinkDiv>
    </FooterDiv>
  );
};

export default Footer;
