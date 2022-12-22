import * as S from './Select.styled';

interface IProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}
const Select = ({ id, label, value, onChange, children }: IProps) => {
  return (
    <S.Select>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} value={value}>
        <option value=''>Elija una opcion</option>
        {children}
      </select>
    </S.Select>
  );
};

export default Select;
