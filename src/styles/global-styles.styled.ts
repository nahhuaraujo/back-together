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
  min-height: 100%;
  padding: 160px 1rem 0;
`;

export const unstyledButton = css`
  background-color: transparent;
  border: none;
`;

export const defaultPaddingStyle = css`
  padding: 0.4rem 1rem;
`;

export const defaultButtonStyle = css`
  width: max-content;
  ${defaultPaddingStyle};
  border: none;
  background-color: ${lightGreenColorValue};
  color: white;
  display: block;

  :hover {
    cursor: pointer;
  }
`;

export const navLinkDefaultHover = css`
  :hover {
    background-color: ${darkGreyColorValue};
  }
`;

export const navLinkDefaultActive = css`
  :active {
    background-color: ${darkGreenColorValue};
    color: white;
  }
`;

export const defaultShadowHover = css`
  :hover {
    box-shadow: 10px 10px ${darkGreenColorValue};
    transform: scale(1.03);
  }
`;
