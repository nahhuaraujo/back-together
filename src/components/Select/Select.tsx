import * as S from './Select.styled';
import { Validator } from '../../utils/validators.util';

interface IProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>, validator: Validator[]) => void;
  validators: Validator[];
  children: React.ReactNode;
}
const Select = ({ id, label, value, onChange, validators, children }: IProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e, validators);
  };
  return (
    <S.Select>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={changeHandler} value={value}>
        <option value=''>Elija una opcion</option>
        {children}
      </select>
    </S.Select>
  );
};

export default Select;
