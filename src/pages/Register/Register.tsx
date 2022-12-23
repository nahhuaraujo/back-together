import { Button, Input } from '../../components';
import { useForm } from '../../hooks';
import * as S from './Register.styled';

const Register = () => {
  const { formValues, changeHandler } = useForm({
    email: '',
    password: '',
    phoneNumber: '',
  });

  const isDisabled = !formValues.email || !formValues.password || !formValues.phoneNumber;

  const submitHandler = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_CLOUD_MONGODB_USERNAME);
  };

  return (
    <S.Register>
      <S.RegisterContainer onSubmit={submitHandler}>
        <S.RegisterForm>
          <Input id='email' label='Ingrese su email' value={formValues.email} onChange={changeHandler} />
          <Input
            id='phoneNumber'
            label='Ingrese un numero telefonico para poder ser contactado'
            value={formValues.phoneNumber}
            onChange={changeHandler}
          />
          <Input
            id='password'
            type='password'
            label='Ingrese su contraseña'
            value={formValues.password}
            onChange={changeHandler}
          />
          <Button disabled={isDisabled}>Registrarse</Button>
        </S.RegisterForm>
      </S.RegisterContainer>
    </S.Register>
  );
};

export default Register;
