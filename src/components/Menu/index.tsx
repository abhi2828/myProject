// import { useToggleSwapModal } from "../../state/application/hooks";
// import { ApplicationModal } from "../../state/application/reducer";
import MenuItemMulti from "./MenuItemMulti";
import MenuItem from "./MenuItem";
// import OutlineBtn from "components/Button/OutlineBtn";
import styled from "styled-components";

import copy_src from "../../assets/images/awt/copy.png";
import { Trans } from "@lingui/macro";
import { CopyToClipboard } from "theme/components";
import { AWT_MAINNET } from "constants/tokens";
import MetamaskBtn from "components/MetamaskBtn";

const StyledDiv1 = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv2 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 37px;
  gap: 30px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: fit-content;
    gap: 20px;
  }
  @media only screen and (max-width: "1140px") {
    width: fit-content;
    gap: 1vw;
  }
`;

const StyledDiv3 = styled.div`
  width: calc(50% + 46px);
  margin-left: -46px;
  padding-right: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: fit-content;
    gap: 30px;
    padding-right: 4vw;
  }
`;

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 18px;
  font-weight: 400;
  padding-right: 100px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    padding-right: 2vw;
  }
  margin: 0;
`;

const StyledP3 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  font-family: "OpenSans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
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

const Menu = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledP1>
          <Trans>Home</Trans>
        </StyledP1>
        <MenuItem title="Vibe" />
        <MenuItemMulti title="Blackpaper" />
        <MenuItem title="MEME Propaganda" />
        <MenuItem title="Audit" />
      </StyledDiv2>
      <StyledDiv3>
        <CopyToClipboard toCopy={AWT_MAINNET.address}>
          <ClipboardDiv>
            <img src={copy_src} alt="Copy" width={23} height={23} />
            <StyledP3>Smart Contract</StyledP3>
          </ClipboardDiv>
        </CopyToClipboard>
        <MetamaskBtn />
        {/* <OutlineBtn children="Buy Now" onClick={() => toggle()} /> */}
      </StyledDiv3>
    </StyledDiv1>
  );
};

export default Menu;
