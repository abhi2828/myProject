import styled from "styled-components";

const StyledBtn = styled.button`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.tertiary_text};
  background: ${({ theme }) => theme.background};
  padding: 16px 29px;

  color: ${({ theme }) => theme.secondary_text};
  font-size: 18px;
  font-weight: 700;
`;
const OutlineBtnGray = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: Function;
}) => {
  const _onClick = onClick ? onClick : () => {};
  return <StyledBtn onClick={() => _onClick()}>{text}</StyledBtn>;
};

export default OutlineBtnGray;
