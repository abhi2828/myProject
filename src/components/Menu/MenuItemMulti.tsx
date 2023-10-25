import styled from "styled-components";
import down_arrow_src from "../../assets/images/awt/down-arrow.svg";
import { StyledP } from "./MenuItem";

const StyledDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
`;

const StyledDiv1 = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItemMulti = ({ title }: { title: string }) => {
  return (
    <StyledDiv>
      <StyledDiv1>
        <StyledP>
          {title}
        </StyledP>
        <img src={down_arrow_src} alt="down arrow" className="grayscale" />
      </StyledDiv1>
    </StyledDiv>
  );
};

export default MenuItemMulti;
