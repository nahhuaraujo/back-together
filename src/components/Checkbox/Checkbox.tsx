import * as S from './Checkbox.styled';

interface IProps {
  id: string;
  label: string;
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = ({ id, label, checkHandler }: IProps) => {
  return (
    <S.Checkbox>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='checkbox' onChange={checkHandler} />
    </S.Checkbox>
  );
};

export default Checkbox;
