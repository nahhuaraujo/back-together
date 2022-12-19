import * as S from './BTLogo.styled';
import { NavLink } from '../';

const BTLogo = () => {
  return (
    <S.BTLogo>
      <NavLink to='/' filter='all'>
        Back Together
      </NavLink>
    </S.BTLogo>
  );
};

export default BTLogo;
