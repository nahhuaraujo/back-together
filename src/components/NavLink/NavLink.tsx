import { useSelector } from 'react-redux';
import { useUIActions } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  children: React.ReactNode;
  filter?: string;
}
const NavLink = ({ to, children, filter }: IProps) => {
  const { filter: selectedFilter, isDrawerOpen } = useSelector((store: IAppStore) => store.ui);
  const { closeDrawer, changeFilter } = useUIActions();

  const clickHandler = () => {
    if (isDrawerOpen) closeDrawer();
    changeFilter(filter ? filter : selectedFilter);
  };

  return (
    <S.NavLink to={to} onClick={clickHandler}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
