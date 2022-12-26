import * as S from './Checkbox.styled';

interface IProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, validators: []) => void;
  validators: [];
}
const Checkbox = ({ id, label, onChange, validators }: IProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, validators);
  };
  return (
    <S.Checkbox>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='checkbox' onChange={changeHandler} />
    </S.Checkbox>
  );
};

export default Checkbox;
