import { NavLink } from '..';
import { PrivateRoutes } from '../../routes';
import * as S from './CreateReportButton.styled';

const CreateReportButton = () => {
  return (
    <S.CreateReportButton>
      <NavLink to={PrivateRoutes.CREATE_REPORT}>+ Crear reporte</NavLink>
    </S.CreateReportButton>
  );
};

export default CreateReportButton;
