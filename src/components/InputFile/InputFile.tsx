import * as S from './InputFile.styled';

interface IProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile = ({ id, label, onChange }: IProps) => {
  return (
    <S.InputFile>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='file' accept='image/*' onChange={onChange} />
    </S.InputFile>
  );
};

export default InputFile;
