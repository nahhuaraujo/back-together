import styled from 'styled-components';
import { defaultPaddingStyle, lightGreenColorValue } from '../../styles/global-styles.styled';

export const Select = styled.div`
  width: 100%;

  label {
    margin-right: 1rem;
    line-height: 35px;
  }

  select {
    width: 100%;
    border: 1px solid ${lightGreenColorValue};
    ${defaultPaddingStyle};
  }
`;
