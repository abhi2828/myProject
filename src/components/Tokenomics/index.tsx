import styled from "styled-components";

import donut_chart_src from "../../assets/images/awt/donutchart.png";
import unicrypt_src from "../../assets/images/awt/unicrypt.png";

const DivFlex = styled.div`
  display: flex;
`;

const StyledDiv1 = styled.div`
  margin-bottom: 8.33vw;
`;

const StyledDiv2 = styled.div`
  position: absolute;
  top: 4.68vw;
  left: -0.26vw;
`;

const StyledDiv2Mobile = styled.div`
  position: absolute;
  top: 7.47vw;
  left: -2.67vw;
`;

const StyledP = styled.p<{ size?: string }>`
  color: ${({ size }) => (size === "mobile" ? "#1B8271" : "#000")};

  text-align: center;
  font-family: "Poppins";
  font-size: ${({ size }) => (size === "mobile" ? "6.93vw" : "4.68vw")};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 0;
  margin-bottom: ${({ size }) => (size === "mobile" ? "3.73vw" : "1.56vw")};
`;

const StyledP2 = styled.p<{ weight: number; size?: string }>`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: ${({ size }) => (size === "mobile" ? "5.87vw" : "2.86vw")};
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  line-height: normal;
  margin: 0;
`;

const StyledP3 = styled.p`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 2.34vw;
  font-style: normal;
  font-weight: 400;
  line-height: 2.34vw;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -13.54vw;
  position: relative;
  z-index: 10;
`;

const StyledP3Mobile = styled.p`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 4.27vw;
  font-style: normal;
  font-weight: 275;
  line-height: 4.27vw;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -30vw;
  position: relative;
  z-index: 10;
`;

const StyledP5 = styled.p`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 2.34vw;
  font-style: normal;
  font-weight: 400;
  line-height: 2.34vw;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  z-index: 10;
  bottom: -1.04vw;
  right: -1.04vw;
`;

const StyledP5Mobile = styled.p`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 4.27vw;
  font-style: normal;
  font-weight: 400;
  line-height: 4.27vw;
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
  z-index: 10;
  bottom: -2.5vw;
  right: 0.1vw;
`;

const StyledP4 = styled.p`
  color: #000;

  text-align: center;
  font-family: "Krub";
  font-size: 1.04vw;
  font-style: normal;
  font-weight: 500;
  line-height: 2.08vw;
  margin-top: 0;
  margin-bottom: -0.52vw;
`;

const StyledP4Mobile = styled.p`
  color: #000;

  text-align: center;
  font-family: "Krub";
  font-size: 2.4vw;
  font-style: normal;
  font-weight: 500;
  line-height: 4.53vw;
  margin-top: 0;
  margin-bottom: -5px;
`;

const StyledP6 = styled.p`
  border-radius: 2.79vw;
  border: 0.28vw solid #000;
  background: rgba(217, 217, 217, 0);
  padding: 1.04vw 1.04vw;
  margin-top: 9.375vw;
  margin-bottom: 4.69vw;

  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 3.125vw;
  font-style: normal;
  font-weight: 400;
  line-height: 4.43vw;
`;

const StyledP6Mobile = styled.p`
  border-radius: 0px 9.6vw;
  border: 0.53vw solid #000;
  padding: 4vw;
  margin-top: 10.6vw;
  margin-bottom: 3.73vw;

  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 5.33vw;
  font-style: normal;
  font-weight: 400;
  line-height: 7.47vw;
`;

const StyledP7 = styled.p`
  color: #000;

  font-family: "Poppins";
  font-size: 2.6vw;
  font-style: normal;
  font-weight: 600;
  line-height: 3.125vw;
  margin: 0;
  text-align: center;
`;

const StyledP7Mobile = styled.p`
  color: #000;

  font-family: "Poppins";
  font-size: 4.53vw;
  font-style: normal;
  font-weight: 300;
  margin: 0;
  text-align: center;
`;

const StyledP8 = styled.p`
  color: #000;

  font-family: "Poppins";
  font-size: 3.125vw;
  font-style: normal;
  font-weight: 600;
  line-height: 3.65vw;
  margin: 0;
  text-align: center;
`;

const StyledP8Mobile = styled.p`
  color: #000;

  font-family: "Poppins";
  font-size: 5.33vw;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  text-align: center;
`;

const StyledP9 = styled.p`
  color: #000;

  font-family: "Poppins";
  font-size: 4.16vw;
  font-style: normal;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const Percent1 = styled.p<{size?:string}>`
  position: absolute;
  left: ${({size}) => size==="mobile" ? "32%" : "30%"};
  top: 17%;
  color: #fff;

  text-align: center;
  font-family: "Poppins";
  font-size: ${({size}) => size==="mobile" ? "7vw" : "4vw"};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const Percent2 = styled.p<{size?:string}>`
  position: absolute;
  right: ${({size}) => size==="mobile" ? "23%" : "20%"};
  bottom: 10%;
  color: #fff;

  text-align: center;
  font-family: "Poppins";
  font-size: ${({size}) => size==="mobile" ? "7vw" : "4vw"};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const StyledP9Mobile = styled.p`
  color: #000;

  font-family: "Poppins";
  font-size: 7.2vw;
  font-style: normal;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10.67vw;
  text-align: center;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.sm}px`}) {
        margin-bottom: 7vw;
  }
`;

const DivHalf = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDonutDiv = styled.div`
  margin-top: 2.67vw;
  position: relative;
`;

const StyledImg = styled.img`
  width: 39.79vw;
  height: 37.81vw;
`;

const StyledImgMobile = styled.img`
  width: 74vw;
  height: 70vw;
`;

const StyledImg1 = styled.img`
  width: 9.79vw;
  height: 2.34vw;
`;

const StyledImg1Mobile = styled.img`
  width: 21.3vw;
  height: 5.067vw;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const data = [
  ["Exchange", "10"],
  ["Liquidity", "90"],
];

export const options = {
  pieHole: 0.4,
  is3D: false,
};

const Tokenomics = ({ size }: { size?: string }) => {
  if (size !== "mobile")
    return (
      <StyledDiv1>
        <StyledP>Tokenomics</StyledP>
        <DivFlex>
          <DivHalf>
            <StyledP2 weight={600}>Token Supply:</StyledP2>
            <StyledP2 weight={500}>29,666,553,300,000</StyledP2>
            <StyledDonutDiv>
              <StyledP3>
                Exchange
                <br />
                Listing
              </StyledP3>
              <StyledImg src={donut_chart_src} alt="Donut Chart" />
              <Percent1>10%</Percent1>
              <Percent2>90%</Percent2>
              <StyledDiv2>
                <StyledP4>Locked on</StyledP4>
                <StyledImg1 src={unicrypt_src} alt="Unicrpyt" />
              </StyledDiv2>
              <StyledP5>
                Liquidity
                <br />
                Pool
              </StyledP5>
            </StyledDonutDiv>
          </DivHalf>
          <DivHalf>
            <StyledP6>
              No Taxes, No Wokies,
              <br />
              No Fuckers, Just Pure
              <br />
              Anti-Woke Degeneracy
            </StyledP6>
            <StyledP7>we don't complain</StyledP7>
            <StyledP8>we aren’t fucking wokies</StyledP8>
            <StyledP9>
              that’s why CONTRACT
              <br />
              is RENOUNCED
            </StyledP9>
          </DivHalf>
        </DivFlex>
      </StyledDiv1>
    );
  else
    return (
      <FlexCol>
        <StyledP size="mobile">Tokenomics</StyledP>
        <StyledP2 weight={600} size="mobile">
          Token Supply:
        </StyledP2>
        <StyledP2 weight={500} size="mobile">
          29,666,553,300,000
        </StyledP2>
        <StyledDonutDiv>
          <StyledP3Mobile>
            Exchange
            <br />
            Listing
          </StyledP3Mobile>
          <StyledImgMobile src={donut_chart_src} alt="Donut Chart" />
          <Percent1 size="mobile">10%</Percent1>
          <Percent2 size="mobile">90%</Percent2>
          <StyledDiv2Mobile>
            <StyledP4Mobile>Locked on</StyledP4Mobile>
            <StyledImg1Mobile src={unicrypt_src} alt="Unicrpyt" />
          </StyledDiv2Mobile>
          <StyledP5Mobile>
            Liquidity
            <br />
            Pool
          </StyledP5Mobile>
        </StyledDonutDiv>
        <StyledP6Mobile>
          No Taxes, No Wokies,
          <br />
          No Fuckers, Just Pure
          <br />
          Anti-Woke Degeneracy
        </StyledP6Mobile>
        <StyledP7Mobile>we don't complain</StyledP7Mobile>
        <StyledP8Mobile>we aren’t fucking wokies</StyledP8Mobile>
        <StyledP9Mobile>
          that’s why CONTRACT
          <br />
          is RENOUNCED
        </StyledP9Mobile>
      </FlexCol>
    );
};

export default Tokenomics;
