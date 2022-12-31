import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Input, InputFile, Select } from '../../components';
import { useForm } from '../../hooks';
import { IReport } from '../../models';
import { IAppStore } from '../../redux/store';
import { VALIDATOR_REQUIRE } from '../../utils/validators.util';
import * as S from './CreateReport.styled';

const CreateReport = () => {
  const { _id, email, phone } = useSelector((store: IAppStore) => store.user);
  const navigate = useNavigate();
  const { formValues, inputHandler, selectHandler, checkHandler, selectFileHandler, clearValues } = useForm({
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
      value: '',
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
    !formValues.type.isValid ||
    !formValues.species.isValid ||
    !formValues.breed.isValid ||
    !formValues.sex.isValid ||
    !formValues.description.isValid ||
    !formValues.img.isValid ||
    !formValues.location.isValid;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReport: Partial<IReport> = {
      pet: {
        name: formValues.name.value,
        species: formValues.species.value,
        breed: formValues.breed.value,
        sex: formValues.sex.value,
        description: formValues.description.value,
        img: formValues.img.value,
      },
      user: { _id, email, phone },
      type: formValues.type.value,
      location: formValues.location.value,
      reward: formValues.reward.value,
    };
    (async () => {
      try {
        await axios.post(`${process.env.REACT_APP_BACK_TOGETHER_API}/report`, newReport);
      } catch (e) {
        console.log((e as Error).message);
      }
    })();
    clearValues();
    navigate('/');
  };

  return (
    <S.CreateReport>
      <S.FormContainer>
        <S.ReportForm onSubmit={submitHandler}>
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
            label='Ingrese una brave descripcion'
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
            label='Seleccione una imagen'
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
