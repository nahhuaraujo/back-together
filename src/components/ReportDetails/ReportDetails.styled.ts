import styled from 'styled-components';
import { darkGreyColorValue, defaultThinBorder } from '../../styles/global-styles.styled';

export const ReportDetails = styled.div`
  padding: 1rem;
  min-height: 70vh;
  min-width: 80%;
  background-color: white;
  display: flex;
  gap: 1rem;
`;

export const ReportImg = styled.img`
  width: 70%;
  object-fit: cover;
  background-color: ${darkGreyColorValue};
  ${defaultThinBorder};
`;

export const ReportData = styled.section`
  width: 100%;
`;
