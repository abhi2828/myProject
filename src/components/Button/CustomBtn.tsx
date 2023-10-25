import { ReactNode } from "react";
import styled from "styled-components";

const StyledBtn = styled.button<{ margin?: string }>`
  display: flex;
  align-items: center;
  gap: 0.521vw;

  border: none;
  border-radius: 0.417vw;
  background: ${({ theme }) => theme.secondary};
  box-shadow: 0px 1.302vw 2.604vw 0px rgba(255, 116, 104, 0.36);
  padding: 0.521vw 1.406vw;

  color: ${({ theme }) => theme.light};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  @media only screen and (min-width: ${({ theme }) =>
      `${theme.breakpoint.xxxl}px`}) {
        font-size: 18px;
        gap: 10px;
        border-radius: 8px;
        box-shadow: 0px 25px 50px 0px rgba(255, 116, 104, 0.36);
        padding: 10px 27px;
  }
  margin: ${({ margin }) => margin};
`;

const CustomBtn = ({
  children,
  onClick,
  margin,
}: {
  children: ReactNode;
  onClick?: Function;
  margin?: string;
}) => {
  const _onClick = onClick ? onClick : () => {};
  return (
    <StyledBtn onClick={() => _onClick()} margin={margin}>
      {children}
    </StyledBtn>
  );
};

export default CustomBtn;
