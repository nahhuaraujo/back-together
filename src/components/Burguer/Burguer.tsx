import { useDispatch } from 'react-redux';
import { uiActions } from '../../redux/slices';
import * as S from './Burguer.styled';

const Burguer = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(uiActions.openDrawer());
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
