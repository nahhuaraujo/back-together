import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../components';
import { useForm } from '../../hooks';
import { IUser } from '../../models';
import { uiActions } from '../../redux/slices';
import { PublicRoutes } from '../../routes';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators.util';
import * as S from './Register.styled';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formValues, inputHandler } = useForm({
    email: {
      value: '',
      isValid: false,
    },
    phone: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  });

  const isDisabled = !formValues.email.isValid || !formValues.password.isValid || !formValues.phone.isValid;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: Partial<IUser> = {
      email: formValues.email.value,
      phone: formValues.phone.value,
      password: formValues.password.value,
    };
    (async () => {
      try {
        dispatch(uiActions.setIsLoading(true));
        await axios.post(`${process.env.REACT_APP_BACK_TOGETHER_URL}/register`, newUser);
        navigate(PublicRoutes.LOGIN);
      } catch (e) {
        console.log((e as Error).message);
      } finally {
        dispatch(uiActions.setIsLoading(false));
      }
    })();
  };

  return (
    <S.Register>
      <S.RegisterContainer>
        <S.RegisterForm onSubmit={submitHandler}>
          <Input
            id='email'
            type='email'
            label='Ingrese su email'
            value={formValues.email.value}
            onChange={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
          />
          <Input
            id='phone'
            label='Ingrese un numero telefonico para poder ser contactado'
            value={formValues.phone.value}
            onChange={inputHandler}
            validators={[VALIDATOR_MINLENGTH(10)]}
          />
          <Input
            id='password'
            type='password'
            label='Ingrese su contraseña'
            value={formValues.password.value}
            onChange={inputHandler}
            validators={[VALIDATOR_MINLENGTH(6)]}
          />
          <Button disabled={isDisabled}>Registrarse</Button>
        </S.RegisterForm>
      </S.RegisterContainer>
    </S.Register>
  );
};

export default Register;
