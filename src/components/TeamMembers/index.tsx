import styled from "styled-components";
import { useIsMobile, useIsTablet } from "nft/hooks";

import one_src from "../../assets/images/awt/LiberalCrybabies.png";
import two_src from "../../assets/images/awt/two_src.png";
import three_src from "../../assets/images/awt/three_src.png";
import four_src from "../../assets/images/awt/four_src.png";
import block_src from "../../assets/images/awt/three2_src.png";

const StyledDiv1 = styled.div<{ size?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ size }) => (size === "mobile" ? "7.4vw" : "5.31vw")};
`;

const StyledDiv2 = styled.div<{ size?: string }>`
  display: flex;
  justify-content: ${({ size }) =>
    size === "mobile" ? "space-around" : "space-between"};
  flex-wrap: ${({ size }) => (size === "mobile" ? "wrap" : "no-wrap")};
  width: 100%;
`;

const StyledDiv3 = styled.div<{ size?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ size }) => (size === "mobile" ? "10px !important" : "1.61vw")};
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    gap: 15px;
  }
`;

const StyledDiv4 = styled.div<{ src: string; size?: string }>`
  width: ${({ size }) => (size === "mobile" ? "45vw !important" : "381px")};
  height: ${({ size }) => (size === "mobile" ? "43vw !important" : "361px")};
  flex-shrink: 0;
  border-radius: 14px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 320px;
    height: 312px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 260px;
    height: 246px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 200px;
    height: 190px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledP1 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ size }) => (size === "mobile" ? "6.4vw" : "20px")};
  font-weight: ${({ size }) => (size === "mobile" ? "600" : "700")};
  margin-top: 0;
  margin-bottom: ${({ size }) => (size === "mobile" ? "1.6vw" : "1.25vw")};
`;

const StyledP2 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary_text};
  font-size: ${({ size }) => (size === "mobile" ? "5.33vw" : "2.6vw")};
  font-weight: 600;
  margin-top: 0;
  margin-bottom: ${({ size }) => (size === "mobile" ? "2.67vw" : "1.66vw")};
`;

const StyledP3 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: 0.83vw;
  font-weight: 400;
  line-height: 1.46vw;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.82vw;
`;

const StyledP4 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: 0.83vw;
  font-weight: 400;
  line-height: 1.46vw;
  margin-top: 0;
  margin-bottom: 0.52vw;
`;

const StyledP5 = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.primary_text};
  font-size: ${({ size }) => (size === "mobile" ? "2.67vw" : "1.25vw")};
  white-space: ${({ size }) => (size === "mobile" ? "nowrap" : "initial")};
  font-weight: 800;
  margin: 0;
`;

const StyledP6 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  font-family: "OpenSans";
  font-size: 2.93vw;
  font-style: normal;
  font-weight: 400;
  line-height: 4.53vw;
  margin-top: 0;
  margin-bottom: 5vw;
`;

const StyledImg1 = styled.img<{ size?: string }>`
  width: 270px;
  height: 270px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 150px;
    height: 150px;
  }
`;

const StyledImg = styled.img<{ size?: string }>`
  width: 38vw;
  height: 38vw;
`;

const TeamMembers = ({ size }: { size?: string }) => {
  if (size !== "mobile")
    return (
      <StyledDiv1>
        <StyledP1>A Destroyed Society</StyledP1>
        <StyledP2>The world is full of woke fuckwits</StyledP2>
        <StyledP3>
          here is our top 4 of the woke agenda morons, we want to sell this
          token to fund anti woke memes and <br />
          bring comedy gold by just screaming the word gay, and casual rasicim
        </StyledP3>
        <StyledP4>press 1 if rascist.</StyledP4>
        <StyledDiv2>
          <StyledDiv3>
            <StyledDiv4 src={one_src} />
            <StyledP5>Liberal Crybabies</StyledP5>
          </StyledDiv3>
          <StyledDiv3>
            <StyledDiv4 src={two_src} />
            <StyledP5>Gender Fluid Ideology</StyledP5>
          </StyledDiv3>
          <StyledDiv3>
            <StyledDiv4 src={three_src}>
              <StyledImg1 src={block_src} alt="block" />
            </StyledDiv4>
            <StyledP5>Gay Propaganda</StyledP5>
          </StyledDiv3>
          <StyledDiv3>
            <StyledDiv4 src={four_src} />
            <StyledP5>Vegans</StyledP5>
          </StyledDiv3>
        </StyledDiv2>
      </StyledDiv1>
    );
  else
    return (
      <StyledDiv1 size={"mobile"}>
        <StyledP1 size="mobile">A Destroyed Society</StyledP1>
        <StyledP2 size={"mobile"}>The world is full of woke fuckwits</StyledP2>
        <StyledP6>
          here is our top 4 of the woke agenda morons. we
          <br />
          want to sell this token to fund anti-woke memes
          <br />
          and bring comedy gold by just screaming the
          <br />
          word gay and casual racism
        </StyledP6>
        <StyledDiv2 size={"mobile"}>
          <StyledDiv3 size={"mobile"}>
            <StyledDiv4 src={one_src} size={"mobile"} />
            <StyledP5 size={"mobile"}>Liberal Crybabies</StyledP5>
          </StyledDiv3>
          <StyledDiv3 size={"mobile"}>
            <StyledDiv4 src={two_src} size={"mobile"} />
            <StyledP5 size={"mobile"}>Gender Fluid Ideology</StyledP5>
          </StyledDiv3>
          <StyledDiv3 size={"mobile"}>
            <StyledDiv4 src={three_src} size={"mobile"}>
              <StyledImg src={block_src} alt="block" size={"mobile"} />
            </StyledDiv4>
            <StyledP5 size={"mobile"}>Gay Propaganda</StyledP5>
          </StyledDiv3>
          <StyledDiv3 size={"mobile"}>
            <StyledDiv4 src={four_src} size={"mobile"} />
            <StyledP5 size={"mobile"}>Vegans</StyledP5>
          </StyledDiv3>
        </StyledDiv2>
      </StyledDiv1>
    );
};

export default TeamMembers;
