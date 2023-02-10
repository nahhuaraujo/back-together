import styled from 'styled-components';
import { defaultPaddingStyle, green_200_value } from '../../styles/global-styles.styled';

export const Checkbox = styled.div`
  min-width: max-content;
  width: 100%;
  display: grid;
  grid-column: 1fr 1fr;
  grid-template-columns: 50% 50%;

  label {
    margin-right: 1rem;
    text-align: right;
  }

  input {
    width: fit-content;
    border: 1px solid ${green_200_value};
    ${defaultPaddingStyle};
  }
`;
