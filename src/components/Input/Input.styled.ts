import styled from 'styled-components';
import { defaultPaddingStyle, lightGreenColorValue } from '../../styles/global-styles.styled';

export const Input = styled.div`
  min-width: max-content;
  width: 100%;
  display: grid;
  grid-column: 1fr 1fr;
  grid-template-columns: 50% 50%;

  label {
    margin-right: 1rem;
    text-align: right;
    line-height: 35px;
  }

  input {
    border: 1px solid ${lightGreenColorValue};
    ${defaultPaddingStyle};
  }
`;
