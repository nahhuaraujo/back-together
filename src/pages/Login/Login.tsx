import { Input, NavLink } from '../../components';
import { useForm, useUserActions } from '../../hooks';
import * as S from './Login.styled';

const Login = () => {
  const { formValues, changeHandler } = useForm({ email: '', password: '' });
  const { setUserData } = useUserActions();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData({
      id: 'jansdjksal',
      phoneNumber: '1127548423',
      ...formValues,
      token: 'asdasdlkjsadlksd123y987.kadjk1kjhgl2.basdj12lm',
    });
  };

  return (
    <S.Login>
      <S.UserForm onSubmit={submitHandler}>
        <S.FormContainer>
          <Input
            id='email'
            type='email'
            value={formValues.email}
            placeholder='Ingrese su email'
            onChange={changeHandler}
          />
          <Input
            id='password'
            type='password'
            value={formValues.password}
            placeholder='Ingrese su contraseña'
            onChange={changeHandler}
          />
          <S.LoginButtton>Login</S.LoginButtton>
          <p>
            Encontraste o perdiste una mascota? <NavLink to='/register'>Registrate aca</NavLink> y reportalo
          </p>
        </S.FormContainer>
      </S.UserForm>
    </S.Login>
  );
};

export default Login;
