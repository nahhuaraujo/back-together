import styled from 'styled-components';
import { darkGreyColorValue, defaultThinBorder, subtitleStyle } from '../../styles/global-styles.styled';

export const ReportDetails = styled.div`
  max-width: fit-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
  display: flex;
  gap: 2rem;

  @media (max-width: 850px) {
    width: 80vw;
    flex-direction: column;
    min-width: fit-content;
  }
`;

export const ReportImg = styled.img`
  object-fit: cover;
  background-color: ${darkGreyColorValue};
  ${defaultThinBorder};

  @media (max-width: 850px) {
    width: 80vw;
    flex-direction: column;
  }
`;

export const ReportData = styled.section`
  width: 100%;
  padding: 0 1rem 2rem 0;
  div {
    p {
      margin: 1rem 0 0 1rem;
    }
  }
`;

export const ReportSubtitle = styled.h2`
  ${subtitleStyle};
`;

export const ReportReward = styled.p`
  font-weight: bold;
`;
