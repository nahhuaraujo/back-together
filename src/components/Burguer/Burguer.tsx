import { useUIActions } from '../../hooks';
import * as S from './Burguer.styled';

const Burguer = () => {
  const { openDrawer } = useUIActions();

  const clickHandler = () => {
    openDrawer();
  };

  return (
    <S.Burguer onClick={clickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </S.Burguer>
  );
};

export default Burguer;
