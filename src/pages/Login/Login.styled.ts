import styled from 'styled-components';
import { darkGreenColorValue, defaultPageStyle, defaultThinBorder } from '../../styles/global-styles.styled';

export const Login = styled.main`
  ${defaultPageStyle}
`;

export const LoginForm = styled.form`
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
  max-width: 50%;
  min-width: fit-content;
  width: 50%;
  height: 400px;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 10px 10px ${darkGreenColorValue};
`;
