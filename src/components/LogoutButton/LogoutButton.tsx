import { useUIActions, useUserActions } from '../../hooks';
import * as S from './LogoutButton.styled';

const LogoutButton = () => {
  const { clearUserData } = useUserActions();
  const { closeDrawer } = useUIActions();

  const clickHandler = () => {
    clearUserData();
    closeDrawer();
  };

  return <S.LogoutButton onClick={clickHandler}>Cerrar sesion</S.LogoutButton>;
};

export default LogoutButton;
