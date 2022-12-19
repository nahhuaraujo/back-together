import { css } from 'styled-components';

export const lightestGreenColorValue = '#a0facc';
export const lightGreenColorValue = '#26de81';
export const darkGreenColorValue = '#20bf6b';
export const lightGreyColorValue = '#d1d8e0';
export const darkGreyColorValue = '#a5b1c2';

export const defaultThinBorder = css`
  border: 2px solid ${lightestGreenColorValue};
`;

export const defaultPageStyle = css`
  padding-top: 160px;
`;

export const unstyledButton = css`
  background-color: transparent;
  border: none;
`;

export const navLinkDefaultHover = css`
  :hover {
    background-color: ${darkGreyColorValue};
  }
`;
