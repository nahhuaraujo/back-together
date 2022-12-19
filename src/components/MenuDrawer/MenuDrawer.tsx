import { useSelector } from 'react-redux';
import { NavLink } from '../';
import { useUIActions } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './MenuDrawer.styled';

const MenuDrawer = () => {
  const { isDrawerOpen } = useSelector((store: IAppStore) => store.ui);
  const { closeDrawer } = useUIActions();

  const clickHandler = () => {
    closeDrawer();
  };

  return (
    <>
      <S.MenuDrawer isOpen={isDrawerOpen}>
        <ul>
          <li>
            <button onClick={clickHandler}>X</button>
          </li>
          <li>
            <NavLink to={'/login'}>Login</NavLink>
          </li>
          <li>
            <NavLink to={'/found'}>Encontrados</NavLink>
          </li>
          <li>
            <NavLink to={'/lost'}>Perdidos</NavLink>
          </li>
          <li>
            <NavLink to='/about-us'>Sobre nosotros</NavLink>
          </li>
          <li>
            Encontraste o perdiste una mascota? <NavLink to='/create-report'>Reportala aca</NavLink>
          </li>
        </ul>
      </S.MenuDrawer>
      <S.DropBack onClick={clickHandler} isOpen={isDrawerOpen} />
    </>
  );
};

export default MenuDrawer;
