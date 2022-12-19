import styled from 'styled-components';
import { navLinkDefaultHover } from '../../styles/global-styles.styled';

export const LogoutButton = styled.button`
  color: black;
  width: 100%;
  text-decoration: none;
  transition: 100ms;

  ${navLinkDefaultHover};
`;
