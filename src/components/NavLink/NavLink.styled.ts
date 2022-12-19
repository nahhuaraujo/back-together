import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkGreyColorValue } from '../../styles/global-styles.styled';

interface INavLinkProps {
  onClick: () => void;
}
export const NavLink = styled(Link)<INavLinkProps>`
  color: black;
  width: 100%;
  text-decoration: none;
  transition: 100ms;

  :hover {
    background-color: ${darkGreyColorValue};
  }
`;
