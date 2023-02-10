import styled from 'styled-components';
import { defaultPaddingStyle, green_200_value } from '../../styles/global-styles.styled';

export const Input = styled.div`
  width: 100%;

  label {
    margin-right: 1rem;
    line-height: 35px;
  }

  input {
    width: 100%;
    border: 1px solid ${green_200_value};
    ${defaultPaddingStyle};
  }
`;
