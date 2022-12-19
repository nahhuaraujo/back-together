import { useUIActions } from '../../hooks';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  children: React.ReactNode;
}
const NavLink = ({ to, children }: IProps) => {
  const { closeDrawer } = useUIActions();

  const clickHandler = () => {
    closeDrawer();
  };

  return (
    <S.NavLink to={to} onClick={clickHandler}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
