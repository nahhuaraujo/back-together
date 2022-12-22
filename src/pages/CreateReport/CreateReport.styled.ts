import styled from 'styled-components';
import { defaultPageStyle, defaultThinBorder } from '../../styles/global-styles.styled';

export const CreateReport = styled.main`
  ${defaultPageStyle}
`;

export const ReportForm = styled.form`
  padding: 1rem;
  height: 100%;
  ${defaultThinBorder}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FormContainer = styled.div`
  min-width: max-content;
  width: 80%;
  min-height: max-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
`;
