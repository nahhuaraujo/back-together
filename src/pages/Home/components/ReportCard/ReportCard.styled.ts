import styled from 'styled-components';
import {
  defaultShadowHoverStyle,
  defaultThinBorderStyle,
  grey_200_value,
} from '../../../../styles/global-styles.styled';

export const ReportCard = styled.section`
  margin: 0 auto 1.5rem;
  padding: 1rem;
  min-height: fit-content;
  max-width: 600px;
  background-color: white;
  transition: 300ms;
  z-index: 999;
  cursor: pointer;

  ${defaultShadowHoverStyle};
`;

export const ReportImage = styled.img`
  width: 100%;
  min-height: 500px;
  ${defaultThinBorderStyle};
  object-fit: cover;
  margin: 0;
  background-color: ${grey_200_value};
  display: block;
`;

export const ReportDescription = styled.div`
  width: 100%;
  padding-top: 1rem;
  margin-left: 0;
  display: block;

  h2 {
    font-size: 2rem;
  }
  span {
    font-size: 1rem;
  }
`;

export const ReportReward = styled.p`
  font-weight: bold;
`;
