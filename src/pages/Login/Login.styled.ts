import styled from 'styled-components';
import {
  darkGreenColorValue,
  darkGreyColorValue,
  defaultPadding,
  defaultPageStyle,
  defaultThinBorder,
  lightGreenColorValue,
} from '../../styles/global-styles.styled';

export const Login = styled.main`
  text-align: center;
  ${defaultPageStyle}
`;

export const UserForm = styled.form`
  width: 400px;
  height: 500px;
  padding: 1rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 10px 10px ${darkGreenColorValue};
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${defaultThinBorder}

  > div, button {
    margin-bottom: 2rem;
  }
`;

export const LoginButtton = styled.button`
  width: max-content;
  ${defaultPadding};
  border: none;
  margin: 0 auto;
  background-color: ${darkGreyColorValue};
  color: white;
  display: block;

  :hover {
    background-color: ${lightGreenColorValue};
    cursor: pointer;
  }
`;
