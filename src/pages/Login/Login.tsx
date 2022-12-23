import { useNavigate } from 'react-router-dom';
import { Button, Input, NavLink } from '../../components';
import { useForm, useUserActions } from '../../hooks';
import { PublicRoutes } from '../../routes';
import * as S from './Login.styled';

const Login = () => {
  const { formValues, changeHandler } = useForm({ email: '', password: '' });
  const { setUserData } = useUserActions();
  const navigate = useNavigate();

  const isDisabled = !formValues.email || !formValues.password;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData({
      id: 'jansdjksal',
      phoneNumber: '1127548423',
      email: formValues.email,
      token: 'asdasdlkjsadlksd123y987.kadjk1kjhgl2.basdj12lm',
    });
    navigate(PublicRoutes.HOME);
  };

  return (
    <S.Login>
      <S.FormContainer>
        <S.LoginForm onSubmit={submitHandler}>
          <Input id='email' type='email' value={formValues.email} label='Ingrese su email' onChange={changeHandler} />
          <Input
            id='password'
            type='password'
            value={formValues.password}
            label='Ingrese su contraseña'
            onChange={changeHandler}
          />
          <Button disabled={isDisabled}>Iniciar sesion</Button>
          <NavLink to='/register'>Registrate aca</NavLink>
        </S.LoginForm>
      </S.FormContainer>
    </S.Login>
  );
};

export default Login;
