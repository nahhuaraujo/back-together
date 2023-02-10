import styled from 'styled-components';
import { defaultPageStyle, defaultThinBorderStyle, green_300_value } from '../../styles/global-styles.styled';

export const Register = styled.main`
  ${defaultPageStyle}
`;

export const RegisterContainer = styled.div`
  width: fit-content;
  min-width: fit-content;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 10px 10px ${green_300_value};
`;

export const RegisterForm = styled.form`
  padding: 1rem;
  ${defaultThinBorderStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
