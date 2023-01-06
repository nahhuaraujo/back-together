import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uiActions, userActions } from '../../redux/slices';
import { PublicRoutes } from '../../routes';
import * as S from './LogoutButton.styled';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(userActions.clearUserData());
    dispatch(uiActions.closeDrawer());
    navigate(PublicRoutes.LOGIN);
  };

  return <S.LogoutButton onClick={clickHandler}>Cerrar sesion</S.LogoutButton>;
};

export default LogoutButton;
