import styled from "styled-components";

export const StyledP = styled.p`
  color: ${({ theme }) => theme.secondary_text};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 190px;
  margin: 0;
`;

const MenuItem = ({ title }: { title: string }) => {
  return <StyledP>{title}</StyledP>;
};

export default MenuItem;
