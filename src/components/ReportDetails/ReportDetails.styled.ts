import styled from 'styled-components';
import { darkGreyColorValue, defaultThinBorder, subtitleStyle } from '../../styles/global-styles.styled';

export const ReportDetails = styled.div`
  width: 80%;
  max-width: fit-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
  gap: 2rem;

  > div {
    display: flex;
    gap: 1rem;
    flex-basis: 0;
  }

  @media (max-width: 850px) {
    width: 80%;
    flex-direction: column;
    min-width: fit-content;
  }
`;

export const ReportImg = styled.img`
  width: 100%;
  height: 70vh;
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
