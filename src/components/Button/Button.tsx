import * as S from './Button.styled';

interface IProps {
  disabled?: boolean;
  children: React.ReactNode;
}
const Button = ({ disabled = false, children }: IProps) => {
  return <S.Button disabled={disabled}>{children}</S.Button>;
};

export default Button;
