import styled from "styled-components";

// import instagram_src from "../../assets/images/awt/socials/instagram.png";
// import facebook_src from "../../assets/images/awt/socials/facebook.png";
// import youtube_src from "../../assets/images/awt/socials/youtube.png";
// import twitter_src from "../../assets/images/awt/socials/twitter.png";
// import linkedin_src from "../../assets/images/awt/socials/linkedin.png";
// import soundcloud_src from "../../assets/images/awt/socials/soundcloud.png";
// import vimeo_src from "../../assets/images/awt/socials/vimeo.png";
import telegram_src from "../../assets/images/awt/socials/telegram.png";
import cgtrader_src from "../../assets/images/awt/partners/cgtrader.png";
// import tiktok_src from "../../assets/images/awt/socials/tiktok.png";
// import spotify_src from "../../assets/images/awt/socials/spotify.png";
// import pinterest_src from "../../assets/images/awt/socials/pinterest.png";
// import shazam_src from "../../assets/images/awt/socials/shazam.png";
// import google_src from "../../assets/images/awt/socials/google.png";
import etherscan_src from "../../assets/images/awt/partners/etherscan.png";

const StyledDiv = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  position: relative;
  margin-bottom: ${({ size }) => (size === "mobile" ? "8.53vw" : "5.885vw")};
`;

const StyledA = styled.a<{ size?: string }>`
  width: ${({ size }) => (size === "mobile" ? "16vw !important" : "225px")};
  height: ${({ size }) => (size === "mobile" ? "16vw !important" : "225px")};
  border-radius: 150px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
    width: 170px;
    height: 170px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.sm}px`}) {
    width: 21.87vw;
    height: 21.87vw;
  }
`;

const StyledImgDiv = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledP = styled.p<{ size?: string }>`
  color: ${({ theme }) => theme.dark};
  text-align: center;
  font-family: "Poppins";
  font-size: ${({ size }) => (size === "mobile" ? "5.33vw" : "3.125vw")};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: ${({ size }) => (size === "mobile" ? "1.33vw" : "3.125vw")};
`;

const partners = [
  // {
  //   name: "Instagram",
  //   symbol: instagram_src,
  //   url: "https://www.instagram.com/",
  // },
  // {
  //   name: "Facebook",
  //   symbol: facebook_src,
  //   url: "https://www.facebook.com/",
  // },
  // {
  //   name: "Youtube",
  //   symbol: youtube_src,
  //   url: "https://www.youtube.com/",
  // },
  // {
  //   name: "Twitter",
  //   symbol: twitter_src,
  //   url: "https://twitter.com/",
  // },
  // {
  //   name: "Linkedin",
  //   symbol: linkedin_src,
  //   url: "https://www.linkedin.com/",
  // },
  // {
  //   name: "SoundCloud",
  //   symbol: soundcloud_src,
  //   url: "https://soundcloud.com/",
  // },
  // {
  //   name: "Vimeo",
  //   symbol: vimeo_src,
  //   url: "https://vimeo.com",
  // },
  {
    name: "Telegram",
    symbol: telegram_src,
    url: "https://web.telegram.org/",
  },
  {
    name: "CGTrader",
    symbol: cgtrader_src,
    url: "https://www.cgtrader.com/",
  },
  {
    name: "etherscan",
    symbol: etherscan_src,
    url: "https://etherscan.io/",
  },
  // {
  //   name: "TikTok",
  //   symbol: tiktok_src,
  //   url: "https://www.tiktok.com/",
  // },
  // {
  //   name: "Spotify",
  //   symbol: spotify_src,
  //   url: "https://open.spotify.com/",
  // },
  // {
  //   name: "Pinterest",
  //   symbol: pinterest_src,
  //   url: "https://www.pinterest.com/",
  // },
  // {
  //   name: "Shazam",
  //   symbol: shazam_src,
  //   url: "https://www.shazam.com/",
  // },
  // {
  //   name: "Google",
  //   symbol: google_src,
  //   url: "https://www.google.com/",
  // },
];

const Socials = ({ size }: { size?: string }) => {
  return (
    <div>
      <StyledP size={size}>Get Involved</StyledP>
      <StyledDiv size={size}>
        {partners.map((each) => (
          <StyledA
            key={each.name}
            href={each.url}
            target="_blank"
            rel="noreferrer"
            size={size}
          >
            <StyledImgDiv src={each.symbol} />
          </StyledA>
        ))}
      </StyledDiv>
    </div>
  );
};

export default Socials;
