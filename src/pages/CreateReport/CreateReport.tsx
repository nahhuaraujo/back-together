import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Input, InputFile, Select } from '../../components';
import { useForm } from '../../hooks';
import { uiActions } from '../../redux/slices';
import { IAppStore } from '../../redux/store';
import { PublicRoutes } from '../../routes';
import { VALIDATOR_REQUIRE } from '../../utils/validators.util';
import * as S from './CreateReport.styled';

const CreateReport = () => {
  const { _id, email, phone } = useSelector((store: IAppStore) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formValues, inputHandler, selectHandler, checkHandler, selectFileHandler } = useForm({
    type: {
      value: '',
      isValid: false,
    },
    name: {
      value: '',
      isValid: false,
    },
    species: {
      value: '',
      isValid: false,
    },
    breed: {
      value: '',
      isValid: false,
    },
    sex: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
    img: {
      value: undefined,
      isValid: false,
    },
    location: {
      value: '',
      isValid: false,
    },
    reward: {
      value: false,
      isValid: true,
    },
  });

  let isDisabled =
    (formValues.type.value === 'lost' && !formValues.name.isValid) ||
    !formValues.type.isValid ||
    !formValues.species.isValid ||
    !formValues.breed.isValid ||
    !formValues.sex.isValid ||
    !formValues.description.isValid ||
    !formValues.img.isValid ||
    !formValues.location.isValid;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formValues.name.value);
    formData.append('species', formValues.species.value);
    formData.append('breed', formValues.breed.value);
    formData.append('sex', formValues.sex.value);
    formData.append('description', formValues.description.value);
    formData.append('img', formValues.img.value as File);
    formData.append('_id', _id);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('type', formValues.type.value);
    formData.append('location', formValues.location.value);
    formData.append('reward', formValues.reward.value);

    (async () => {
      try {
        dispatch(uiActions.setIsLoading(true));
        await axios.post(`${process.env.REACT_APP_BACK_TOGETHER_URL}/reports`, formData);
        navigate(PublicRoutes.HOME);
      } catch (e) {
        console.log((e as Error).message);
      } finally {
        dispatch(uiActions.setIsLoading(false));
      }
    })();
  };

  return (
    <S.CreateReport>
      <S.FormContainer>
        <S.ReportForm onSubmit={submitHandler} encType='multipart/form-data'>
          <Select
            id='type'
            label='Seleccione tipo de reporte'
            value={formValues.type.value}
            onChange={selectHandler}
            validators={[VALIDATOR_REQUIRE()]}
          >
            <option value='found'>He encontrado una mascota</option>
            <option value='lost'>He perdido una mascota</option>
          </Select>
          {formValues.type.value === 'lost' && (
            <Input
              id='name'
              value={formValues.name.value}
              label='Ingrese nombre de la mascota'
              onChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
            />
          )}
          <Select
            id='species'
            label='Seleccione la especie'
            value={formValues.species.value}
            onChange={selectHandler}
            validators={[VALIDATOR_REQUIRE()]}
          >
            <option value='dog'>Perro</option>
            <option value='cat'>Gato</option>
          </Select>
          <Input
            id='breed'
            value={formValues.breed.value}
            label='Ingrese raza'
            onChange={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Select
            id='sex'
            label='Seleccione el sexo'
            value={formValues.sex.value}
            onChange={selectHandler}
            validators={[VALIDATOR_REQUIRE()]}
          >
            <option value='male'>Macho</option>
            <option value='female'>Hembra</option>
          </Select>
          <Input
            id='description'
            value={formValues.description.value}
            label='Ingrese una breve descripcion'
            onChange={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id='location'
            value={formValues.location.value}
            label={`Ingrese zona por donde se ${
              formValues.type.value === ''
                ? 'perdio/encontro'
                : formValues.type.value === 'lost'
                ? 'perdio'
                : 'encontro'
            }`}
            onChange={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <InputFile
            id='img'
            name='img'
            label='Seleccione una imagen'
            value={formValues.img}
            onChange={selectFileHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          {formValues.type.value === 'lost' && (
            <Checkbox id='reward' label='Se ofrece recompensa' onChange={checkHandler} validators={[]} />
          )}
          <Button disabled={isDisabled}>Crear reporte</Button>
        </S.ReportForm>
      </S.FormContainer>
    </S.CreateReport>
  );
};

export default CreateReport;
