import styled, { DefaultTheme } from "styled-components";

import dexTools_src from "../../assets/images/awt/partners/dextools.png";
import oneInch_src from "../../assets/images/awt/partners/oneInch.png";
import etherscan_src from "../../assets/images/awt/partners/etherscan.png";
import coinMarketCap_src from "../../assets/images/awt/partners/coinMarketCap.png";
import metamask_src from "../../assets/images/awt/wallets/metamask_gray.png";
import twitter_src from "../../assets/images/awt/partners/twitter.png";
import uniswap_src from "../../assets/images/awt/partners/uniswap.png";
import telegram_src from "../../assets/images/awt/partners/telegram.png";
import { StyledA } from "components/Header";
import { TELEGRAM_LINK, TWITTER_LINK } from "constants/contants";
import Metamask from "./Metamask";

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

const GrayImg = styled.img`
  filter: grayscale(100%);
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
    url: "https://etherscan.io/address/0xd0fa6b71f7f3d56ac09b74d902df3ea2c3aeb5ca",
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
      <Metamask />
    ),
    symbol_mobile: (
      <img src={metamask_src} alt="Metamask" width={50} height={50} />
    ),
  },
  {
    name: "twitter",
    symbol: <img src={twitter_src} alt="twitter" width={137} height={129} />,
    src: twitter_src,
    mobile: true,
    url: TWITTER_LINK,
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
    url: TELEGRAM_LINK,
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
            <StyledDiv3 size="mobile" key={index} src={each.src}><StyledA href={each.url} target="_blank" rel="noreferrer"></StyledA></StyledDiv3>
          ))}
      </StyledDiv>
    );
};

export default Partners;
