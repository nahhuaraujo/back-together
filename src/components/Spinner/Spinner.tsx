import { useSelector } from 'react-redux';
import GridLoader from 'react-spinners/GridLoader';
import { IAppStore } from '../../redux/store';
import { darkGreenColorValue } from '../../styles/global-styles.styled';
import * as S from './Spinner.styled';

const Spinner = () => {
  const { isLoading } = useSelector((store: IAppStore) => store.ui);
  return (
    <>
      {isLoading && (
        <S.SpinnerOverlay>
          <GridLoader color={darkGreenColorValue} />
        </S.SpinnerOverlay>
      )}
    </>
  );
};

export default Spinner;
