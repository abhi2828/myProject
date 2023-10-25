import styled from "styled-components";
import CustomBtn from "components/Button/CustomBtn";
import { AWT_MAINNET } from "constants/tokens";
import { useWeb3React } from "@web3-react/core";
import { useActivationState } from "connection/activate";
import { injectedConnection } from "connection";

import metamask_src from "../../assets/images/awt/wallets/metamask.png";
import metamask_gray_src from "../../assets/images/awt/wallets/metamask_gray.png";
import { useToggleAccountDrawer } from "components/AccountDrawer";

const MetamaskButton = styled.button<{ size?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  background: none;
  padding: 2px;
  margin: 0;
  text-transform: ${({ size }) => (size === "mobile" ? "none" : "uppercase")};
`;

const StyledP2 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 16px;
  font-family: "OpenSans";
  font-weight: 700;
  line-height: 28px;
  margin: 0;
`;

const MetamaskBtn = ({ size }: { size?: string }) => {
  const { tryActivation } = useActivationState();
  const toggleAccountDrawer = useToggleAccountDrawer();
  const { account, connector, chainId } = useWeb3React();
  const activate = () =>
    tryActivation(injectedConnection, toggleAccountDrawer, 1);
  const addToMetamask = async () => {
    if (!AWT_MAINNET?.symbol || !connector.watchAsset) return;
    if (chainId !== 1)
      try {
        await connector.activate(1);
        connector.watchAsset({
          address: AWT_MAINNET.address,
          symbol: AWT_MAINNET.symbol,
          decimals: AWT_MAINNET.decimals,
          image: `${process.env.PUBLIC_URL}/images/192x192_App_icon.png`,
        });
        return;
      } catch {
        return;
      }
    connector.watchAsset({
      address: AWT_MAINNET.address,
      symbol: AWT_MAINNET.symbol,
      decimals: AWT_MAINNET.decimals,
      image: `${process.env.PUBLIC_URL}/images/192x192_App_icon.png`,
    });
  };
  if (!account) {
    return (
      <CustomBtn onClick={() => activate()} margin="2.67vw">
        Connect Wallet
      </CustomBtn>
    );
  } else {
    return (
      <MetamaskButton onClick={() => addToMetamask()} size={size}>
        {size === "mobile" ? (
          <img src={metamask_gray_src} alt="Metamask" width={45} height={42} />
        ) : (
          <img src={metamask_src} alt="Metamask" width={69} height={69} />
        )}
        <StyledP2>Add to Metamask</StyledP2>
      </MetamaskButton>
    );
  }
};
export default MetamaskBtn;
