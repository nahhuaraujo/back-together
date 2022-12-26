import { Validator } from '../../utils/validators.util';
import * as S from './InputFile.styled';

interface IProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, validators: Validator[]) => void;
  validators: Validator[];
}

const InputFile = ({ id, label, onChange, validators }: IProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, validators);
  };
  return (
    <S.InputFile>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='file' accept='image/*' onChange={changeHandler} />
    </S.InputFile>
  );
};

export default InputFile;
