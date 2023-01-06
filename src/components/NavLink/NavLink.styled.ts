import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { defaultPaddingStyle, navLinkDefaultActive, navLinkDefaultHover } from '../../styles/global-styles.styled';

interface INavLinkProps {
  onClick: () => void;
}
export const NavLink = styled(Link)<INavLinkProps>`
  ${defaultPaddingStyle};
  color: black;
  min-width: min-content;
  text-decoration: none;
  transition: 100ms;

  ${navLinkDefaultHover};
  ${navLinkDefaultActive}
`;
