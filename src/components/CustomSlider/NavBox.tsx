import styled from "styled-components";
import ellipse_src from "../../assets/images/awt/ellipse.svg";

const StyledDiv = styled.div`
  width: 243px;
  height: 243px;
  border-radius: 14px;
  background: #fff;
  margin-bottom: 20px;

  position: relative;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* Shadow - Base */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  &:hover {
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05),
      0px 10px 15px 0px rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        width: 220px;
        height: 243px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        width: 181px;
        height: 220px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        width: 150px;
        height: 165px;
  }
`;

const StyledImg1 = styled.img`
  top: 33px;
  left: 103px;
  position: absolute;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        left: 91px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        left: 72px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        top: 10px;
        left: 50px;
  }
`;

const StyledImg2 = styled.img`
  margin-top: 53px;
  margin-bottom: 30px;
  position: relative;
  z-index: 10;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        margin-top: 20px;
        margin-bottom: 10px;
  }
`;

const StyledP = styled.p`
  color: black;
  font-size: 18px;
  font-family: "Poppins";
  font-size: 500;
  text-transform: uppercase;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        font-size: 15px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        font-size: 10px;
  }
`;

const NavBox = ({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) => {
  return (
    <StyledDiv>
      <StyledImg1 src={ellipse_src} alt="Ellipse" />
      <StyledImg2 src={src} alt={alt} />
      <StyledP>{text}</StyledP>
    </StyledDiv>
  );
};

export default NavBox;
