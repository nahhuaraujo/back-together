import styled from 'styled-components';
import { green_100_value } from '../../styles/global-styles.styled';

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${green_100_value};
  display: grid;
  justify-content: center;
  align-items: center;
`;
