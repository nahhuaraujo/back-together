import { useSelector } from 'react-redux';
import { NavLink } from '../';
import { IAppStore } from '../../redux/store';
import * as S from './BTLogo.styled';

const BTLogo = () => {
  const { filter } = useSelector((store: IAppStore) => store.ui);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <S.BTLogo onClick={scrollToTop}>
      <NavLink to='/' filter={filter}>
        Back Together
      </NavLink>
    </S.BTLogo>
  );
};

export default BTLogo;
