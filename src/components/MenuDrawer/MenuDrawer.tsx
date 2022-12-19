import { useSelector } from 'react-redux';
import { NavLink } from '../';
import { useUIActions } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './MenuDrawer.styled';
import { LogoutButton } from '../';

const MenuDrawer = () => {
  const { ui, user } = useSelector((store: IAppStore) => store);
  const { closeDrawer } = useUIActions();

  const clickHandler = () => {
    closeDrawer();
  };

  return (
    <>
      <S.MenuDrawer isOpen={ui.isDrawerOpen}>
        <ul>
          <li>
            <button onClick={clickHandler}>X</button>
          </li>
          <li>
            <NavLink to={'/'} filter='found'>
              Encontrados
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} filter='lost'>
              Perdidos
            </NavLink>
          </li>
          <li>
            <NavLink to={'/'} filter='all'>
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to='/about-us'>Sobre nosotros</NavLink>
          </li>
          <li>{user.token ? <LogoutButton /> : <NavLink to={'/login'}>Login</NavLink>}</li>
          <li>
            Encontraste o perdiste una mascota? <NavLink to='/create-report'>Reportala aca</NavLink>
          </li>
        </ul>
      </S.MenuDrawer>
      <S.DropBack onClick={clickHandler} isOpen={ui.isDrawerOpen} />
    </>
  );
};

export default MenuDrawer;
