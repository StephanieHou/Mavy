import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./index";
import Logo from "../../Images/Logo.png";
import Logout from "../../Auth/Logout";

const Container = styled.div`
  width: 100%;
  height: 75px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 13% 87%;
  align-items: center;
`;

const LogoText = styled.h1`
  color: var(--color-1);
  font-size: 2rem;
  font-family: "MontserratSubrayada-Regular";
`;

const LogoDiv = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 93px 110px;
  align-items: center;
`;

const Image = styled.img`
  height: 75px;
`;

const LinkDiv = styled.div`
  padding-right: 18px;
`;

const LinkWrapper = styled.div`
  grid-auto-flow: column;
  align-items: center;
  grid-template-columns: 50% 50%;
  display: grid;
  width: 300px;
  float: right;
  text-align: right;
`;

const Links = styled.p`
  padding: 1rem;
  color: var(--color-1);
  font-weight: bold;
  font-size: 15px;
`;

export default function Navbar(logged) {
  return (
    <Container className="Navbar">
      <Wrapper>
        <LogoDiv>
          <Image src={Logo} alt="Mavy Logo" />
          <LogoText>MAVY</LogoText>
        </LogoDiv>
        <LinkDiv>
          <LinkWrapper className="Auth-Links">
            <Link to="/login" className="Login-Link">
              <Links>Log In</Links>
            </Link>
            <Link to="/signup" className="Signup-Link">
              <Button>Sign Up</Button>
            </Link>
            <Logout />
          </LinkWrapper>
        </LinkDiv>
      </Wrapper>
    </Container>
  );
}
