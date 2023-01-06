import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton, NavLink } from '../';
import { uiActions } from '../../redux/slices';
import { IAppStore } from '../../redux/store';
import { PrivateRoutes, PublicRoutes } from '../../routes';
import * as S from './MenuDrawer.styled';

const MenuDrawer = () => {
  const { ui, user } = useSelector((store: IAppStore) => store);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(uiActions.closeDrawer());
  };

  return (
    <>
      <S.MenuDrawer isOpen={ui.isDrawerOpen}>
        <ul>
          <li>
            <button onClick={clickHandler}>X</button>
          </li>
          <li>{user.token ? <LogoutButton /> : <NavLink to={PublicRoutes.LOGIN}>Iniciar sesion</NavLink>}</li>
          <li>
            <NavLink to={PublicRoutes.HOME}>Todos</NavLink>
          </li>
          <li>
            <NavLink to={PublicRoutes.HOME} filter='lost'>
              Perdidos
            </NavLink>
          </li>
          <li>
            <NavLink to={PublicRoutes.HOME} filter='found'>
              Encontrados
            </NavLink>
          </li>
          <li>
            <NavLink to={PublicRoutes.ABOUT_US}>Sobre nosotros</NavLink>
          </li>
          <li>
            <div>Encontraste o perdiste una mascota?</div>
            <NavLink to={PrivateRoutes.CREATE_REPORT}>Reportala aca</NavLink>
          </li>
        </ul>
      </S.MenuDrawer>
      <S.DropBack onClick={clickHandler} isOpen={ui.isDrawerOpen} />
    </>
  );
};

export default MenuDrawer;
