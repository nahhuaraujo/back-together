import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Button, Checkbox, Input, InputFile, Select } from '../../components';
import { useForm } from '../../hooks';
import { IReport } from '../../models';
import { IAppStore } from '../../redux/store';
import * as S from './CreateReport.styled';

const CreateReport = () => {
  const { id, email, phoneNumber } = useSelector((store: IAppStore) => store.user);
  const { formValues, changeHandler, selectHandler, checkHandler, selectFileHandler, clearValues } = useForm({
    type: '',
    name: '',
    species: '',
    breed: '',
    sex: '',
    description: '',
    img: '',
    location: '',
    reward: false,
  });

  let isDisabled =
    !formValues.type ||
    !formValues.species ||
    !formValues.breed ||
    !formValues.sex ||
    !formValues.description ||
    !formValues.img ||
    !formValues.location;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReport: IReport = {
      id: uuid(),
      pet: {
        name: formValues.name,
        species: formValues.species,
        breed: formValues.breed,
        sex: formValues.sex,
        description: formValues.description,
        img: formValues.img,
      },
      user: { id, email, phoneNumber },
      type: formValues.type,
      location: formValues.location,
      reward: formValues.reward,
    };
    clearValues();
    console.log(newReport);
  };

  return (
    <S.CreateReport>
      <S.FormContainer>
        <S.ReportForm onSubmit={submitHandler}>
          <Select id='type' label='Seleccione tipo de reporte' value={formValues.type} onChange={selectHandler}>
            <option value='found'>He encontrado una mascota</option>
            <option value='lost'>He perdido una mascota</option>
          </Select>
          {formValues.type === 'lost' && (
            <Input id='name' value={formValues.name} label='Ingrese nombre de la mascota' onChange={changeHandler} />
          )}
          <Select id='species' label='Seleccione la especie' value={formValues.species} onChange={selectHandler}>
            <option value='dog'>Perro</option>
            <option value='cat'>Gato</option>
          </Select>
          <Input id='breed' value={formValues.breed} label='Ingrese raza' onChange={changeHandler} />
          <Select id='sex' label='Seleccione el sexo' value={formValues.sex} onChange={selectHandler}>
            <option value='male'>Macho</option>
            <option value='female'>Hembra</option>
          </Select>
          <Input
            id='description'
            value={formValues.description}
            label='Ingrese una brave descripcion'
            onChange={changeHandler}
          />
          <Input
            id='location'
            value={formValues.location}
            label={`Ingrese zona por donde se ${
              formValues.type === '' ? 'perdio/encontro' : formValues.type === 'lost' ? 'perdio' : 'encontro'
            }`}
            onChange={changeHandler}
          />
          <InputFile id='img' label='Seleccione una imagen' onChange={selectFileHandler} />
          {formValues.type === 'lost' && (
            <Checkbox id='reward' label='Se ofrece recompensa' checkHandler={checkHandler} />
          )}
          <Button disabled={isDisabled}>Crear reporte</Button>
        </S.ReportForm>
      </S.FormContainer>
    </S.CreateReport>
  );
};

export default CreateReport;
