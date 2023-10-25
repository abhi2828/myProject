import styled from "styled-components";

import awt_src from "../../assets/images/awt/awt.png";
import blackguy_src from "../../assets/images/awt/blackguy.png";

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3vw;
  margin-top: 5vh;
`;

const StyledDiv1 = styled.div`
  width: 48.02vw;
  height: 40.63vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 922px;
    height: 780px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.md}px`}) {
    width: 90vw;
    height: 76.1389vw;
  }
`;

const StyledDiv2 = styled.div`
  width: 32.708vw;
  height: 34.583vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 628px;
    height: 664px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.md}px`}) {
    width: 61.302vw;
    height: 64.816vw;
  }
`;

const FullImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Blackpaper = () => {
  return (
    <FlexDiv>
      <StyledDiv1>
        <FullImg src={blackguy_src} alt="AWT" />
      </StyledDiv1>
      <StyledDiv2>
        <FullImg src={awt_src} alt="AWT" />
      </StyledDiv2>
    </FlexDiv>
  );
};

export default Blackpaper;
