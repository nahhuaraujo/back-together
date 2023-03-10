import styled from 'styled-components';
import {
  defaultPaddingStyle,
  navLinkDefaultActiveStyle,
  navLinkDefaultHoverStyle,
} from '../../styles/global-styles.styled';

export const LogoutButton = styled.button`
  width: fit-content;
  ${defaultPaddingStyle};
  border: none;
  color: black;
  background-color: transparent;
  text-decoration: none;
  text-align: right;
  transition: 100ms;
  cursor: pointer;

  ${navLinkDefaultHoverStyle};
  ${navLinkDefaultActiveStyle}
`;
