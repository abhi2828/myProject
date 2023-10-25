import { ReactNode } from "react";
import styled from "styled-components";

const StyledBtn = styled.button<{ width?: string }>`
  width: ${({ width }) => (width ? width : "206px")};
  height: 60px;
  background: transparent;
  border: 1px solid ${({theme}) => (theme.secondary)};
  border-radius: 8px;

  color: ${({theme}) => (theme.secondary)};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const OutlineBtn = ({
  children,
  onClick,
  width,
}: {
  children: ReactNode;
  onClick?: Function;
  width?: string;
}) => {
  const _onClick = onClick ? onClick : () => {};
  return (
    <StyledBtn width={width} onClick={() => _onClick()}>
      {children}
    </StyledBtn>
  );
};

export default OutlineBtn;
