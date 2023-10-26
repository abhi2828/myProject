import styled from "styled-components";

// import { useToggleModal, useToggleSwapModal } from "state/application/hooks";
// import { ApplicationModal } from "state/application/reducer";
import CustomBtn from "components/Button/CustomBtn";
// import OutlineBtnGray from "components/Button/OutlineBtnGray";

import right_arrow_src from "../../assets/images/awt/right-arrow.svg";
import telegram_icon_src from "../../assets/images/awt/telegram_icon.png";
import twitter_src from "../../assets/images/awt/partners/twitter.png";
import brand_1_src from "../../assets/images/awt/partners1.png";
import brand_2_src from "../../assets/images/awt/partners2.png";
import brand_3_src from "../../assets/images/awt/partners3.png";
import header_src from "../../assets/images/awt/header.png";
import { TELEGRAM_LINK, TWITTER_LINK } from "constants/contants";

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7.76vw;
`;

const StyledDiv2 = styled.div`
  width: 50%;
  max-width: 960px;
`;

const StyledDiv3 = styled.div`
  padding-right: 2.396vw;
  padding-left: 6.823vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    padding-right: 46px;
    padding-left: 131px;
  }
`;

const StyledDiv4 = styled.div`
  margin-top: 2.24vw;
  display: flex;
  align-items: center;
  gap: 0.88vw;
  margin-bottom: 2.75vw;
  padding-left: 0.573vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    margin-top: 43px;
    gap: 17px;
    margin-bottom: 53px;
    padding-left: 11px;
  }
`;

const StyledDiv5 = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 0.99vw;
  height: 0.208vw;
  border-radius: 0.417vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 19px;
    height: 4px;
    border-radius: 8px;
  }
`;

const StyledDiv6 = styled.div`
  margin-bottom: 2.969vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    margin-bottom: 57px;
  }
`;

const StyledDiv7 = styled.div`
  display: flex;
  align-items: center;
  gap: 2.24vw;
  margin-bottom: 2.604vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    gap: 43px;
    margin-bottom: 50px;
  }
`;

const StyledDiv8 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.094vw;
  margin-right: 4.16vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    padding-left: 21px;
    padding-right: 67px;
  }
`;

const StyledDiv9 = styled.div`
  width: 50vw;
  height: 100%;
  max-width: 960px;
`;

const StyledDiv10 = styled.div`
  width: calc(100% + 2.396vw);
  height: 100%;
  margin-left: -2.396vw;
  background-image: url(${header_src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledA = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
`;

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "Poppins";
  font-size: 2.604vw;
  font-style: normal;
  font-weight: 700;
  line-height: 2.604vw;
  margin: 0px;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 50px;
    line-height: 50px;
  }
`;

const StyledP2 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "Poppins";
  font-size: 2.083vw;
  font-style: normal;
  font-weight: 600;
  line-height: 2.604vw;
  margin: 0px;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const StyledP21 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "Poppins";
  font-size: 2.083vw;
  font-style: normal;
  font-weight: 600;
  line-height: 2.344vw;
  margin: 0px;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 40px;
    line-height: 45px;
  }
`;

const StyledP3 = styled.p`
  color: ${({ theme }) => theme.secondary_text};
  font-size: 0.938vw;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.521vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const StyledP4 = styled.p`
  margin: 0;
`;

const StyledP5 = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 4.167vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0;
  margin-bottom: 3.698vw;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 80px;
    margin-bottom: 71px;
  }
`;

const PrimaryFont = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.042vw;
  font-weight: 700;
  margin: 0;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    font-size: 20px;
  }
`;

// const MobileFont1 = styled.p`
//   color: ${({ theme }) => theme.primary_text};
//   text-align: center;
//   font-family: "Poppins";
//   font-size: 25px;
//   font-style: normal;
//   font-weight: 250;
//   line-height: normal;
// `;

// const MobileFont2 = styled.p`
//   color: ${({ theme }) => theme.primary_text};
//   text-align: center;
//   font-family: "Poppins";
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
// `;

const StyledImg = styled.img`
  width: 12.34vw;
  max-width: 237px;
`;
const StyledImg1 = styled.div<{
  src?:string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}>`
  background-image: ${({src}) => `url(${src})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
`;

const Header = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledDiv3>
          {/* <StyledP1>
            Token Price
          </StyledP1> */}
          <StyledDiv4>
            <StyledDiv5 />
            <PrimaryFont>Crowd Fucking</PrimaryFont>
          </StyledDiv4>
          <StyledDiv6>
            <StyledP1>Anti-Woke Token:</StyledP1>
            <StyledP2>Were here to say fuck you</StyledP2>
            <StyledP21>to the woke agenda</StyledP21>
          </StyledDiv6>
          <StyledP5>Enter: $AWT</StyledP5>
          <StyledDiv7>
            <CustomBtn onClick={() => {}}>
              <StyledP4>
                JOIN THE COMMUNITY
                <br />
                TO BEAT THE WOKE
                <br />
                CULTURE
              </StyledP4>
            </CustomBtn>
            <StyledImg1
              src={right_arrow_src}
              width="1.927vw"
              height="1.563vw"
              maxWidth="37px"
              maxHeight="30px"
            />
            <StyledImg1
              src={telegram_icon_src}
              width="5.781vw"
              height="5.781vw"
              maxWidth="111px"
              maxHeight="111px"
            >
              <StyledA
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
              ></StyledA>
            </StyledImg1>
            <StyledImg1
              src={twitter_src}
              width="4.323vw"
              height="4.323vw"
              maxWidth="83px"
              maxHeight="83px"
            >
              <StyledA
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
              ></StyledA>
            </StyledImg1>
          </StyledDiv7>
          <StyledP3>Ourt Partners</StyledP3>
        </StyledDiv3>
        <StyledDiv8>
          <StyledImg src={brand_1_src} alt="Brand 1" />
          <StyledImg src={brand_2_src} alt="Brand 2" />
          <StyledImg src={brand_3_src} alt="Brand 3" />
        </StyledDiv8>
      </StyledDiv2>
      <StyledDiv2>
        <StyledDiv9>
          <StyledDiv10>
            {/* <StyledA
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            ></StyledA> */}
          </StyledDiv10>
        </StyledDiv9>
      </StyledDiv2>
    </StyledDiv1>
  );
};

export default Header;
