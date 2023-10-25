import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledP = styled.p`
  color: ${({ theme }) => theme.secondary_text};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 190px;
  margin: 0;
`;

const MenuItem = ({
  title,
  to,
  href,
}: {
  title: string;
  to?: string;
  href?: string;
}) => {
  if (to) return <Link to={to}>{title}</Link>;
  if (href) return <a href={href}>{title}</a>
  return <StyledP>{title}</StyledP>;
};

export default MenuItem;
