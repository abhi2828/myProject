import styled from "styled-components";
import SliderDetail from "./SliderDetail";

const StyledDiv1 = styled.div`
  margin-bottom: 5.21vw;
`;

const StyledDiv2 = styled.div`
  color: ${({ theme }) => theme.primary_text};
  font-size: 2.6vw;
  font-weight: 600;
  margin-bottom: 1.66vw;
`;

const StyledDiv3 = styled.div`
  color: ${({ theme }) => theme.primary_text};
  font-family: "OpenSans";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 3.15vw;
  text-align: center;
`;

const StyledP1 = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.25vw;
`;

const StyledP2 = styled.div`
  text-align: center;
  margin: 0;
`;

const CustomSlider = () => {
  return (
    <StyledDiv1>
      <StyledP1>Our Vibe</StyledP1>
      <StyledDiv2>
        <StyledP2>Can’t we just say whatever we like?</StyledP2>
        <StyledP2>Well Fuck you .</StyledP2>
      </StyledDiv2>
      <StyledDiv3>
        2023 is a nightmare scenario where you cant say what you want think what
        you want , and are forced to <br />
        swallow a giant tranny dick. Buy this coin proudly or anon, tell them
        fuck you I wont do what you tell me.
      </StyledDiv3>
      <SliderDetail />
    </StyledDiv1>
  );
};

export default CustomSlider;
