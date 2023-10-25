import styled, { DefaultTheme } from "styled-components";

import dexTools_src from "../../assets/images/awt/partners/dextools.png";
import oneInch_src from "../../assets/images/awt/partners/oneInch.png";
import etherscan_src from "../../assets/images/awt/partners/etherscan.png";
import coinMarketCap_src from "../../assets/images/awt/partners/coinMarketCap.png";
import metamask_src from "../../assets/images/awt/wallets/metamask_gray.png";
import cgtrader_src from "../../assets/images/awt/partners/cgtrader.png";
import uniswap_src from "../../assets/images/awt/partners/uniswap.png";
import telegram_src from "../../assets/images/awt/partners/telegram.png";
import copy_src from "../../assets/images/awt/copy.png";

const StyledDiv = styled.div<{ size?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  margin-bottom: ${({ size }) =>
    size === "mobile" ? "5.33vw !important" : "8.33vw"};
  row-gap: 1.56vw;
`;

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

const StyledDiv3 = styled.div<{
  size?: string;
  width?: string;
  src?: string;
  theme: DefaultTheme;
}>`
  width: ${({ size, width }) =>
    size === "mobile" ? "31% !important" : width ? width : "350px"};
  height: ${({ size }) =>
    size === "mobile" ? "17vw !important" : "fit-content"};
  gap: ${({ size }) => (size === "mobile" ? "64px !important" : "fit-content")};
  display: flex;
  justify-content: center;
  background-image: ${({ src }) => (src ? `url(${src})` : "none")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 285px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 200px;
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

const GrayImg = styled.img`
  filter: grayscale(100%);
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

const partners = [
  {
    name: "DEXTools",
    symbol: (
      <GrayImg src={dexTools_src} alt="DEXTools" width={129} height={148} />
    ),
    src: dexTools_src,
    mobile: true,
    width: "423px",
    url: "https://www.dextools.io/",
  },
  {
    name: "1inch",
    symbol: <GrayImg src={oneInch_src} alt="1inch" width={137} height={143} />,
    src: oneInch_src,
    mobile: true,
    url: "https://1inch.io/",
  },
  {
    name: "Etherscan",
    symbol: (
      <GrayImg src={etherscan_src} alt="Etherscan" width={140} height={142} />
    ),
    src: etherscan_src,
    mobile: true,
    url: "https://etherscan.io/",
  },
  {
    name: "CoinMarketCap",
    symbol: (
      <GrayImg
        src={coinMarketCap_src}
        alt="CoinMarketCap"
        width={140}
        height={142}
      />
    ),
    src: coinMarketCap_src,
    mobile: true,
    url: "https://coinmarketcap.com/",
  },
  {
    name: "Metamask",
    symbol: (
      <StyledDiv2>
        <StyleDivMeta>
          <MetamaskImg src={metamask_src} alt="Metamask" />
          <StyledP>Add To Metamask</StyledP>
        </StyleDivMeta>
        <StyledP2>
          <span>
            <CopyImg src={copy_src} alt="Copy" />
          </span>
          smart contract address
        </StyledP2>
      </StyledDiv2>
    ),
    symbol_mobile: (
      <img src={metamask_src} alt="Metamask" width={50} height={50} />
    ),
  },
  {
    name: "CgTrader",
    symbol: <img src={cgtrader_src} alt="CgTrader" width={137} height={129} />,
    src: cgtrader_src,
    mobile: true,
    url: "https://www.coinscreener.ai/",
  },
  {
    name: "Uniswap",
    symbol: <img src={uniswap_src} alt="Uniswap" width={167} height={167} />,
    src: uniswap_src,
    mobile: true,
    url: "https://uniswap.org/",
  },
  {
    name: "Telegram",
    symbol: <img src={telegram_src} alt="Telegram" width={147} height={147} />,
    symbol_mobile: (
      <img src={telegram_src} alt="Telegram" width={34} height={34} />
    ),
    url: "https://web.telegram.org/",
  },
];

const Partners = ({ size }: { size?: string }) => {
  if (size !== "mobile")
    return (
      <StyledDiv>
        {partners.map((each, index) => {
          if (each.url)
            return (
              <StyledDiv3 width={each.width} key={index} size={size}>
                <a href={each.url} target="_blank" rel="noreferrer">
                  {each.symbol}
                </a>
              </StyledDiv3>
            );
          else return <div key={index}>{each.symbol}</div>;
        })}
      </StyledDiv>
    );
  else
    return (
      <StyledDiv size="mobile">
        {partners
          .filter((each) => each.mobile)
          .map((each, index) => (
            <StyledDiv3 size="mobile" key={index} src={each.src} />
          ))}
      </StyledDiv>
    );
};

export default Partners;
