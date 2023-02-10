import styled from 'styled-components';
import {
  defaultButtonStyle,
  green_200_value,
  green_300_value,
  grey_200_value,
} from '../../styles/global-styles.styled';

interface ILoginButtonProps {
  disabled: boolean;
}
export const Button = styled.button<ILoginButtonProps>`
  ${defaultButtonStyle};
  background-color: ${({ disabled }) => (disabled ? `${grey_200_value}` : `${green_200_value}`)};

  :active {
    background-color: ${({ disabled }) => (disabled ? `${grey_200_value}` : `${green_300_value}`)};
  }
`;
