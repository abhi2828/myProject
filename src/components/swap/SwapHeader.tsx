// import { Trans } from "@lingui/macro";
import { Percent } from "@uniswap/sdk-core";
import { InterfaceTrade } from "state/routing/types";
import styled from "styled-components";
// import { ThemedText } from "theme/components";

import { RowBetween, RowFixed } from "../Row";
import SettingsTab from "../Settings";
import { Trans } from "@lingui/macro";
// import SwapBuyFiatButton from './SwapBuyFiatButton'

const StyledSwapHeader = styled(RowBetween)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.neutral2};
`;

const HeaderButtonContainer = styled(RowFixed)`
  padding: 0 12px;
  gap: 16px;
`;

const StyledP = styled.p`
  color: #222;
  font-family: "Inter";
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
`;

export default function SwapHeader({
  autoSlippage,
  chainId,
  trade,
}: {
  autoSlippage: Percent;
  chainId?: number;
  trade?: InterfaceTrade;
}) {
  return (
    <StyledSwapHeader>
      <HeaderButtonContainer>
        <StyledP><Trans>Swap</Trans></StyledP>
        {/* <SwapBuyFiatButton /> */}
      </HeaderButtonContainer>
      <RowFixed>
        <SettingsTab
          autoSlippage={autoSlippage}
          chainId={chainId}
          trade={trade}
        />
      </RowFixed>
    </StyledSwapHeader>
  );
}
