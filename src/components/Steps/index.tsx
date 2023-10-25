import styled from "styled-components";
import OutlineBtn from "components/Button/OutlineBtn";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 50px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 35px;
`;

const Steps = () => {
  return (
    <StyledDiv1>
      <StyledP1>BEAT THE WOKE IN 3 STEPZ</StyledP1>
      <StyledDiv2>
        <OutlineBtn>
          Step 1 - Connect
          <br />
          Wallet
        </OutlineBtn>
        <OutlineBtn width="316px">
          Step 2 - Bridge
          <br />
          Now
        </OutlineBtn>
        <OutlineBtn>
          Step 3 - Buy
          <br />
          Now
        </OutlineBtn>
      </StyledDiv2>
    </StyledDiv1>
  );
};

export default Steps;
