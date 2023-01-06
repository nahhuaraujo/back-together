import { useDispatch, useSelector } from 'react-redux';
import { reportActions, uiActions } from '../../redux/slices';
import { IAppStore } from '../../redux/store';
import * as S from './NavLink.styled';

interface IProps {
  to: string;
  filter?: 'lost' | 'found' | 'all';
  children: React.ReactNode;
}
const NavLink = ({ to, filter = 'all', children }: IProps) => {
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector((store: IAppStore) => store.ui);

  const clickHandler = () => {
    if (isDrawerOpen) dispatch(uiActions.closeDrawer());
    dispatch(reportActions.changeFilter(filter));
  };

  return (
    <S.NavLink to={to} onClick={clickHandler}>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
