import { css } from 'styled-components';

export const green_100_value = '#a0facc';
export const green_200_value = '#26de81';
export const green_300_value = '#20bf6b';

export const grey_100_value = '#d1d8e0';
export const grey_200_value = '#a5b1c2';

export const defaultThinBorderStyle = css`
  border: 2px solid ${green_100_value};
`;

export const defaultPageStyle = css`
  min-height: 100%;
  padding: 160px 1rem 0;
`;

export const unstyledButtonStyle = css`
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
  background-color: ${green_200_value};
  color: white;
  display: block;

  :hover {
    cursor: pointer;
  }
`;

export const navLinkDefaultHoverStyle = css`
  :hover {
    background-color: ${grey_200_value};
  }
`;

export const navLinkDefaultActiveStyle = css`
  :active {
    background-color: ${green_300_value};
    color: white;
  }
`;

export const defaultShadowHoverStyle = css`
  :hover {
    box-shadow: 10px 10px ${green_300_value};
    transform: scale(1.03);
  }
`;

export const defaultTitleUnderlineStyle = css`
  background-image: linear-gradient(transparent 60%, ${green_100_value} 40%);
`;

export const titleStyle = css`
  font-size: 2rem;
  margin-top: 1rem;
  ${defaultTitleUnderlineStyle};
`;

export const subtitleStyle = css`
  font-size: 1.5rem;
  margin-top: 2rem;
  ${defaultTitleUnderlineStyle};
`;
