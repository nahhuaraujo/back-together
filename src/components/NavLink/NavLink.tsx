import * as S from './NavLink.styled';

interface IProps {
  to: string;
  children: React.ReactNode;
}
const NavLink = ({ to, children }: IProps) => {
  return <S.NavLink to={to}>{children}</S.NavLink>;
};

export default NavLink;
