import Modal from "components/Modal";
import { useSwapModalIsOpen, useToggleSwapModal } from "state/application/hooks";
import { InterfacePageName } from "@uniswap/analytics-events";
import { ChainId } from "@uniswap/sdk-core";
import { useWeb3React } from "@web3-react/core";
import { Trace } from "analytics";
import { NetworkAlert } from "components/NetworkAlert/NetworkAlert";
import { PageWrapper } from "components/swap/styled";
import { SwitchLocaleLink } from "components/SwitchLocaleLink";
import { asSupportedChain } from "constants/chains";
import { useLocation } from "react-router-dom";
import { Field } from "state/swap/actions";
import { useDefaultsFromURLSearch } from "state/swap/hooks";
import styled from "styled-components";
import { Swap } from "./Swap";

import awt_src from "../../../assets/images/awt/awt.png";

export const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const StyledDiv = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwapDiv = styled.div`
  padding: 12px 8px;
`

const StyledImg = styled.img`
  width: 650px;
  height: 650px;
  margin-top: 150px;
  margin-bottom: 40px;
`;

const SwapModal = () => {
  const isOpen = useSwapModalIsOpen();
  const toggle = useToggleSwapModal();
  const { chainId: connectedChainId } = useWeb3React();
  const loadedUrlParams = useDefaultsFromURLSearch();

  const location = useLocation();

  const supportedChainId = asSupportedChain(connectedChainId);

  return (
    <Modal isOpen={isOpen} onDismiss={toggle} maxWidth={1114}>
      <StyledDiv>
        <ImageDiv>
          <StyledImg src={awt_src} alt="AWT" />
        </ImageDiv>
        <SwapDiv>
          <Trace page={InterfacePageName.SWAP_PAGE} shouldLogImpression>
            <PageWrapper>
              <Swap
                chainId={supportedChainId ?? ChainId.MAINNET}
                initialInputCurrencyId={
                  loadedUrlParams?.[Field.INPUT]?.currencyId
                }
                initialOutputCurrencyId={
                  loadedUrlParams?.[Field.OUTPUT]?.currencyId
                }
                disableTokenInputs={supportedChainId === undefined}
              />
              <NetworkAlert />
            </PageWrapper>
            {/* <SwitchLocaleLink /> */}
          </Trace>
        </SwapDiv>
      </StyledDiv>
    </Modal>
  );
};

export default SwapModal;
