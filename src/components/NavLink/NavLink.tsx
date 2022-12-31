import { useSelector } from 'react-redux';
import { useReportActions, useUIActions } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  filter?: 'lost' | 'found' | 'all';
  children: React.ReactNode;
}
const NavLink = ({ to, filter = 'all', children }: IProps) => {
  const { isDrawerOpen } = useSelector((store: IAppStore) => store.ui);
  const { closeDrawer } = useUIActions();
  const { changeFilter } = useReportActions();

  const clickHandler = () => {
    if (isDrawerOpen) closeDrawer();
    changeFilter(filter);
  };

  return (
    <S.NavLink to={to} onClick={clickHandler}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
