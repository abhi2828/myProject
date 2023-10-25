import Sold from "./Sold";
import styled from "styled-components";
import BtnGreen from "components/Button/BtnGreen";

import chevron_src from "../../assets/images/awt/chevron.svg";
import awt_1_src from "../../assets/images/awt/awt_1.png";
import telegram_src from "../../assets/images/awt/partners/telegram.png";

const StyledDiv1 = styled.div`
  margin-bottom: 1.35vw;
`;

const StyledDiv2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.385vw;
`;

const StyledDiv3 = styled.div`
  height: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
`;

const StyledDiv4 = styled.div`
  display: flex;
`;

const StyledDiv5 = styled.div`
  width: 50%;
  position: relative;
`;

const StyledDiv6 = styled.div`
  width: 50%;
`;
const StyledDiv7 = styled.div`
  display: flex;
  align-items: center;
  gap: 3.4895vw;
`;

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.04vw;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 1.25vw;
`;

const StyledP2 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 2.604vw;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 2.083vw;
`;

const StyledP3 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
`;

const StyledP4 = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

const StyledP5 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 30px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        font-size: 28px;
        margin-bottom: 25px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        font-size: 23px;
        margin-bottom: 20px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        font-size: 19px;
        margin-bottom: 10px;
  }
`;

const StyledP6 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 48px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        margin-bottom: 40px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxl}px`}) {
        font-size: 15px;
        margin-bottom: 30px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xl}px`}) {
        font-size: 15px;
        line-height: normal;
        margin-bottom: 20px;
  }
`;

const StyledImg = styled.img`
  width: 708px;
  height: 495px;
  position: relative;
  left: -12px;
  @media only screen and (max-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
    width: 100%;
    height: fit-content;
    padding-right: 20px;
  }
`;

const SuccessStory = () => {
  return (
    <StyledDiv1>
      <StyledP1>Token</StyledP1>
      <StyledP2>
        This isnt a hate token, its a I’ll say what I want token
      </StyledP2>
      <StyledDiv2>
        <StyledP3>
          We dont hate, we dont cause violence, jsut wanna say waht we want.
        </StyledP3>
        <StyledDiv7>
          <BtnGreen>
            <StyledDiv3>
              <StyledP4>FUCK SOME SHIT UP</StyledP4>
              <img src={chevron_src} alt="Chevron" />
            </StyledDiv3>
          </BtnGreen>
          {/* <img src={telegram_src} alt="Telegram" width={120} height={120} /> */}
        </StyledDiv7>
      </StyledDiv2>
      <StyledDiv4>
        <StyledDiv5>
          <StyledImg src={awt_1_src} alt="AWT" />
        </StyledDiv5>
        <StyledDiv6>
          <StyledP5>
            Buy the token, show them they can’t control you.
            <br />
            FUCK YOUR WOKE AGENDA!
          </StyledP5>
          <StyledP6>
            Let’s face it, every facet of your life is controlled, make
            anti-woke memes, print some fucking checks Stay woke to stay broke.
            Call a fat bitch a fat bitch. Fuck around and find out.
          </StyledP6>
          <Sold />
        </StyledDiv6>
      </StyledDiv4>
    </StyledDiv1>
  );
};

export default SuccessStory;
