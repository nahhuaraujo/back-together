import { useSelector } from 'react-redux';
import GridLoader from 'react-spinners/GridLoader';
import { IAppStore } from '../../redux/store';
import { green_300_value } from '../../styles/global-styles.styled';
import * as S from './Spinner.styled';

const Spinner = () => {
  const { isLoading } = useSelector((store: IAppStore) => store.ui);
  return (
    <>
      {isLoading && (
        <S.SpinnerOverlay>
          <GridLoader color={green_300_value} />
        </S.SpinnerOverlay>
      )}
    </>
  );
};

export default Spinner;
