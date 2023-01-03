import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Input, NavLink } from '../../components';
import { useForm, useUserActions } from '../../hooks';
import { PublicRoutes } from '../../routes';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators.util';
import * as S from './Login.styled';

const Login = () => {
  const { formValues, inputHandler } = useForm({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  });
  const { setUserData } = useUserActions();
  const navigate = useNavigate();

  const isDisabled = !formValues.email.isValid || !formValues.password.isValid;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACK_TOGETHER_API}/login`, {
          email: formValues.email.value,
          password: formValues.password.value,
        });
        setUserData({
          _id: response.data.payload._id,
          phone: response.data.payload.phone,
          email: response.data.payload.email,
          token: response.data.payload.token,
        });
        navigate(PublicRoutes.HOME);
      } catch (e) {
        console.log((e as Error).message);
      }
    })();
  };

  return (
    <S.Login>
      <S.FormContainer>
        <S.LoginForm onSubmit={submitHandler}>
          <Input
            id='email'
            type='email'
            value={formValues.email.value}
            label='Ingrese su email'
            onChange={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id='password'
            type='password'
            value={formValues.password.value}
            label='Ingrese su contraseña'
            onChange={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
          />
          <Button disabled={isDisabled}>Iniciar sesion</Button>
          <NavLink to='/register'>Registrate aca</NavLink>
        </S.LoginForm>
      </S.FormContainer>
    </S.Login>
  );
};

export default Login;
