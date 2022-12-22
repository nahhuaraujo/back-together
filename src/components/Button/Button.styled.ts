import styled from 'styled-components';
import {
  darkGreenColorValue,
  darkGreyColorValue,
  defaultButtonStyle,
  lightGreenColorValue,
} from '../../styles/global-styles.styled';

interface ILoginButtonProps {
  disabled: boolean;
}
export const Button = styled.button<ILoginButtonProps>`
  ${defaultButtonStyle};
  background-color: ${({ disabled }) => (disabled ? `${darkGreyColorValue}` : `${lightGreenColorValue}`)};

  :hover {
    background-color: ${({ disabled }) => (disabled ? `${darkGreyColorValue}` : `${darkGreenColorValue}`)};
  }
`;
