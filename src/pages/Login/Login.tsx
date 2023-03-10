import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input, NavLink } from '../../components';
import { useForm } from '../../hooks';
import { userActions, uiActions } from '../../redux/slices';
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isDisabled = !formValues.email.isValid || !formValues.password.isValid;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      try {
        dispatch(uiActions.setIsLoading(true));
        const response = await axios.post(`${process.env.REACT_APP_BACK_TOGETHER_URL}/auth/login`, {
          email: formValues.email.value,
          password: formValues.password.value,
        });
        dispatch(
          userActions.setUserData({
            _id: response.data.payload._id,
            phone: response.data.payload.phone,
            email: response.data.payload.email,
            token: response.data.payload.token,
          })
        );
        navigate(PublicRoutes.HOME);
      } catch (e) {
        console.log((e as Error).message);
      } finally {
        dispatch(uiActions.setIsLoading(false));
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
            label='Ingrese su contrase??a'
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
