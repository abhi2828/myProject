import { CopyToClipboard } from "theme/components";
import copy_src from "../../assets/images/awt/copy.png";
import metamask_src from "../../assets/images/awt/wallets/metamask_gray.png";
import styled from "styled-components";
import { AWT_MAINNET } from "constants/tokens";
import { useActivationState } from "connection/activate";
import { useToggleAccountDrawer } from "components/AccountDrawer";
import { useWeb3React } from "@web3-react/core";
import { injectedConnection } from "connection";

const StyledDiv2 = styled.div`
  width: 423px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 285px;
    height: 150px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 200px;
    height: 105px;
  }
`;

const StyleDivMeta = styled.div`
  width: 423px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  margin-bottom: 20px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 300px;
    gap: 25px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 200px;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Poppins";
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 20px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 15px;
  }
`;

const StyledP2 = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
  color: ${({ theme }) => theme.primary_text};
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  text-transform: uppercase;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 17px;
    gap: 14px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    font-size: 11px;
    gap: 7px;
    line-height: 15px;
  }
`;

const MetamaskImg = styled.img`
  width: 119px;
  height: 113px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 70px;
    height: 65px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 50px;
    height: 47px;
  }
`;
const CopyImg = styled.img`
  width: 73px;
  height: 73px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 20px;
    height: 20px;
  }
`;

const Metamask = () => {
  const { tryActivation } = useActivationState();
  const toggleAccountDrawer = useToggleAccountDrawer();
  const { account, connector, chainId } = useWeb3React();
  const activate = () =>
    tryActivation(injectedConnection, toggleAccountDrawer, 1);
  const addToMetamask = async () => {
    try {
      if (!account) {
        await activate();
        addToMetamask();
      }
      if (!AWT_MAINNET?.symbol || !connector.watchAsset) return;
      if (chainId !== 1) await connector.activate(1);
      connector.watchAsset({
        address: AWT_MAINNET.address,
        symbol: AWT_MAINNET.symbol,
        decimals: AWT_MAINNET.decimals,
        image: `${process.env.PUBLIC_URL}/images/192x192_App_icon.png`,
      });
    } catch {
      return;
    }
  };
  return (
    <StyledDiv2>
      <StyleDivMeta onClick={() => addToMetamask()}>
        <MetamaskImg src={metamask_src} alt="Metamask" />
        <StyledP>Add To Metamask</StyledP>
      </StyleDivMeta>
      <CopyToClipboard toCopy={AWT_MAINNET.address}>
        <StyledP2>
          <span>
            <CopyImg src={copy_src} alt="Copy" />
          </span>
          smart contract address
        </StyledP2>
      </CopyToClipboard>
    </StyledDiv2>
  );
};

export default Metamask;
