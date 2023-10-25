import styled from "styled-components";

import Partners from ".";
import MetamaskBtn from "components/MetamaskBtn";
import { CopyToClipboard } from "theme/components";
import { AWT_MAINNET } from "constants/tokens";

import bg_src from "../../assets/images/awt/background_mobile.png";
import copy_src from "../../assets/images/awt/copy.png";

const BGDiv = styled.div`
  background-image: ${() => `url(${bg_src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  font-family: "Poppins";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  padding-top: 1.33vw;
  margin: 0;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.md}px`}) {
        font-size: 35px;
        line-height: 35px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.sm}px`}) {
        font-size: 25px;
        line-height: 25px;
  }
`;

const StyledP2 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  font-family: "Poppins";
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  margin: 0;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.md}px`}) {
        font-size: 30px;
        line-height: 35px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.sm}px`}) {
        font-size: 20px;
        line-height: 25px;
  }
`;

const StyledP3 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  font-family: "Poppins";
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;
  margin-top: 0;
  margin-bottom: 8vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.md}px`}) {
        font-size: 30px;
        line-height: 32px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.sm}px`}) {
        font-size: 20px;
        line-height: 22px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
`;
const Flex1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2.67vw;
`;

const ClipboardDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  outline: none;
  background: none;
  padding: 2px;
  margin: 0;
  text-transform: uppercase;
`;

const StyledP4 = styled.p`
color: ${({ theme }) => theme.primary_text};
text-align: center;
font-family: "OpenSans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px;
margin: 0;
`;

const MobilePartners = () => {
  return (
    <BGDiv>
      <StyledP1>Anti-Woke Token:</StyledP1>
      <StyledP2>We’re here to say fuck you</StyledP2>
      <StyledP3>to the woke agenda</StyledP3>
      <Partners size="mobile" />
      <Flex>
        <MetamaskBtn size="mobile" />
      </Flex>
      <Flex1>
        <CopyToClipboard toCopy={AWT_MAINNET.address}>
          <ClipboardDiv>
            <img src={copy_src} alt="Copy" width={23} height={23} />
            <StyledP4>Smart Contract Address</StyledP4>
          </ClipboardDiv>
        </CopyToClipboard>
      </Flex1>
    </BGDiv>
  );
};

export default MobilePartners;
