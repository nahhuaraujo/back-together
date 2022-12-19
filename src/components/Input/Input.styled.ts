import styled from 'styled-components';
import { defaultPadding, lightGreenColorValue } from '../../styles/global-styles.styled';

export const Input = styled.div`
  input {
    border: 1px solid ${lightGreenColorValue};
    ${defaultPadding};
  }
`;
