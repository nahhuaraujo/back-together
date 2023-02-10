import { NavLink } from '../../../../components';
import * as S from './BTLogo.styled';

const BTLogo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <S.BTLogo onClick={scrollToTop}>
      <NavLink to='/'>Back Together</NavLink>
    </S.BTLogo>
  );
};

export default BTLogo;
