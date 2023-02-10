import styled from 'styled-components';
import { defaultPageStyle, defaultThinBorderStyle } from '../../styles/global-styles.styled';

export const CreateReport = styled.main`
  ${defaultPageStyle}
`;

export const FormContainer = styled.div`
  max-width: 70%;
  min-width: fit-content;
  min-height: max-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
`;

export const ReportForm = styled.form`
  padding: 1rem;
  height: 100%;
  ${defaultThinBorderStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
