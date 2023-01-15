import { Validator } from '../../utils/validators.util';
import * as S from './InputFile.styled';

interface IProps {
  id: string;
  name: string;
  label: string;
  value: HTMLImageElement;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, validators: Validator[]) => void;
  validators: Validator[];
}

const InputFile = ({ id, label, name, onChange, validators }: IProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, validators);
  };
  return (
    <S.InputFile>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type='file' onChange={changeHandler} />
    </S.InputFile>
  );
};

export default InputFile;
