import styled from 'styled-components';
import { darkGreyColorValue, defaultThinBorder, subtitleStyle } from '../../styles/global-styles.styled';

export const ReportDetails = styled.div`
  max-width: fit-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;

  display: flex;
  gap: 1rem;

  @media (max-width: 850px) {
    flex-direction: column;
    min-width: fit-content;
  }
`;

export const ReportImgContainer = styled.div`
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ReportImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${darkGreyColorValue};
  ${defaultThinBorder};
`;

export const ReportData = styled.section`
  width: 50%;
  div {
    p {
      margin: 1rem 0 0 1rem;
    }
  }
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ReportSubtitle = styled.h2`
  ${subtitleStyle};
`;

export const ReportReward = styled.p`
  font-weight: bold;
`;
