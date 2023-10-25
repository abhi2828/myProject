import { ReactNode } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 260px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
`;

const BtnGreen = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default BtnGreen;
