import styled from 'styled-components';
import { defaultPaddingStyle, green_300_value } from '../../../../styles/global-styles.styled';

export const CreateReportButton = styled.div`
  display: flex;
  justify-content: center;

  a {
    width: fit-content;
    height: max-content;
    ${defaultPaddingStyle};
    margin-bottom: 2rem;
    background-color: white;
    transition: 300ms;

    :hover {
      background-color: white;
      box-shadow: 10px 10px ${green_300_value};
      transform: scale(1.03);
    }
  }
`;
