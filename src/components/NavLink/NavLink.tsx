import { useUIActions } from '../../hooks';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  children: React.ReactNode;
  filter?: string;
}
const NavLink = ({ to, children, filter }: IProps) => {
  const { closeDrawer, changeFilter } = useUIActions();

  const clickHandler = () => {
    closeDrawer();
    changeFilter(filter);
  };

  return (
    <S.NavLink to={to} onClick={clickHandler}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
