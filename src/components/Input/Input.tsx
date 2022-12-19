import * as S from './Input.styled';

interface IProps {
  id: string;
  type: 'text' | 'email' | 'password';
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ id, type = 'text', value, placeholder, onChange }: IProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.Input>
      <input id={id} type={type} value={value} placeholder={placeholder} onChange={changeHandler} autoComplete='off' />
    </S.Input>
  );
};

export default Input;
