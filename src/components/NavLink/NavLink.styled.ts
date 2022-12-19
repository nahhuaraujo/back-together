import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface INavLinkProps {
  onClick: () => void;
}
export const NavLink = styled(Link)<INavLinkProps>`
  color: black;
  width: max-content;
  text-align: right;
  text-decoration: none;
`;
