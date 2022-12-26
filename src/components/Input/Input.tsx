import { Validator } from '../../utils/validators.util';
import * as S from './Input.styled';

interface IProps {
  id: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, validators: Validator[]) => void;
  disabled?: boolean;
  validators: Validator[];
}
const Input = ({ id, type = 'text', value, label, onChange, disabled = false, validators }: IProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, validators);
  };

  return (
    <S.Input>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={changeHandler} autoComplete='off' disabled={disabled} />
    </S.Input>
  );
};

export default Input;
