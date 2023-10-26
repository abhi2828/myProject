import styled from "styled-components";

import Header from "components/Header";
import Alert from "components/Mail";
import Menu from "components/Menu";
import CustomSlider from "components/CustomSlider";
// import Steps from "components/Steps";
import TeamMembers from "components/TeamMembers";
import SuccessStory from "components/SuccessStory";
import BrandLogo from "components/BrandLogo";
import Projects from "components/Projects";

// import awt_src from "../../assets/images/awt/awt.png";
// import SwapModal from "components/swap/SwapModal";
// wallet connect
// import AccountDrawer from "components/AccountDrawer";
import Partners from "components/Partners";
import Socials from "components/Socials";
import Tokenomics from "components/Tokenomics";
import { useIsMobile, useIsTablet } from "nft/hooks";
// import tokenomics_src from "../../assets/images/awt/tokenomics.png";
import banner_src from "../../assets/images/awt/banner.png";
import jesus_src from "../../assets/images/awt/jesus.png";
import Roadmap from "components/Roadmap";
import MobileHeader from "components/Header/MobileHeader";
import MobilePartners from "components/Partners/MobilePartners";
import { TWITTER_LINK } from "constants/contants";

const StyledDiv = styled.div<{ size?: string }>`
  width: 100vw;
  background-color: #F7FFF2;
`;

const StyledDiv1 = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 1620px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 1400px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 1150px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 950px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.lg}px`}) {
    width: 100%;
  }
`;

const FlexDiv = styled.div<{ size?: string }>`
  display: flex;
  padding-left: ${({ size }) => (size === "mobile" ? "0" : "8%")};
  margin-right: ${({ size }) => (size === "mobile" ? "0" : "-50px")};
  justify-content: ${({ size }) =>
    size === "mobile" ? "space-around" : "space-between"};
  align-items: center;
  margin-bottom: ${({ size }) => (size === "mobile" ? "6.13vw" : "4vw")};
`;

// const StyledDiv2 = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const StyledImg = styled.img`
//   width: 74%;
//   margin-bottom: -20px;
// `;

const FullImg = styled.img<{ size?: string }>`
  width: 100%;
  margin-bottom: ${({ size }) => (size === "mobile" ? "2.67vw" : "7.135vw")};
`;

const StyledA1 = styled.a`
  width: 100%;
  text-decoration: none;
`

const StyledP = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.dark};
  text-align: center;
  font-family: "Poppins";
  font-size: ${({ size }) =>
    size === "mobile" ? "2.67vw !important" : "50px"};
  font-style: normal;
  font-weight: 600;
  line-height: ${({ size }) => (size === "mobile" ? "5.33vw" : "normal")};
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 40px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    font-size: 30px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 20px;
  }
`;

const StyledImg = styled.img<{ size?: string }>`
  width: ${({ size }) => (size === "mobile" ? "32vw" : "395px")};
  height: ${({ size }) => (size === "mobile" ? "32.5vw" : "400px")};
`;

const Copyright = styled.p<{ size?: string }>`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 1.56vw;
  font-style: normal;
  font-weight: 275;
  line-height: normal;
`;

const Landing = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  if (!isMobile && !isTablet)
    return (
      <StyledDiv>
        <Alert />
        <Menu />
        <Header />
        <StyledDiv1>
          <Partners />
          <CustomSlider />
        </StyledDiv1>
        <Tokenomics />
        <StyledDiv1>
          <TeamMembers />
          <SuccessStory />
          <Roadmap />
          <BrandLogo />
          <Projects />
          <Socials />
        </StyledDiv1>
        <StyledA1 href={TWITTER_LINK} target="_blank" rel="noreferrer">
          <FullImg src={banner_src} alt="Banner" />
        </StyledA1>
        <StyledDiv1>
          <FlexDiv>
            <StyledP>THIS WON'T MAKE YOU RICH. FIND JESUS</StyledP>
            <StyledImg src={jesus_src} alt="JESUS" />
          </FlexDiv>
        </StyledDiv1>
        <Copyright>© 2023 by Anti-Woke Token. All rights reserved!</Copyright>
        {/* <StyledDiv2>
          <StyledImg src={awt_src} alt="AWT" />
        </StyledDiv2> */}
        {/* <SwapModal /> */}
        {/* <AccountDrawer /> */}
      </StyledDiv>
    );
  else
    return (
      <StyledDiv size="mobile">
        <MobileHeader />
        {/* <Steps /> */}
        <MobilePartners />
        <BrandLogo size="mobile" />
        <StyledA1 href={TWITTER_LINK} target="_blank" rel="noreferrer">
          <FullImg src={banner_src} alt="Banner" size="mobile" />
        </StyledA1>
        <Tokenomics size="mobile" />
        <TeamMembers size="mobile" />
        <Roadmap size="mobile" />
        <Projects size="mobile" />
        <Socials size="mobile" />
        <FlexDiv size="mobile">
          <StyledP size="mobile">
            THIS WONT MAKE YOU RICH.
            <br />
            FIND JESUS
          </StyledP>
          <StyledImg src={jesus_src} alt="JESUS" size="mobile" />
        </FlexDiv>
        <Copyright size="mobile">
          © 2023 by Anti-Woke Token. All rights reserved!
        </Copyright>
        {/* <StyledDiv2>
          <StyledImg src={awt_src} alt="AWT" />
        </StyledDiv2> */}
        {/* <SwapModal /> */}
        {/* <AccountDrawer /> */}
      </StyledDiv>
    );
};

export default Landing;
