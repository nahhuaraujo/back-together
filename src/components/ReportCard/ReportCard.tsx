import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IReport } from '../../models';
import { IAppStore } from '../../redux/store';
import { PrivateRoutes } from '../../routes';
import * as S from './ReportCard.styled';
import { ReportTitle } from '../../components';

interface IProps {
  report: IReport;
}

const ReportCard = ({ report }: IProps) => {
  const { token } = useSelector((store: IAppStore) => store.user);
  const navigate = useNavigate();

  const seeFullReport = () => {
    navigate(`${PrivateRoutes.REPORT}/${report._id}`);
  };

  const showMessage = () => {
    console.log('Para ver el reporte completo debe iniciar sesion');
  };

  return (
    <S.ReportCard onClick={!!token ? seeFullReport : showMessage}>
      <S.ReportImage src={`${process.env.REACT_APP_BACK_TOGETHER_URL}/img/pets/${report.pet.img}`} />
      <S.ReportDescription>
        <ReportTitle report={report} />
        <div>
          <p>Descripcion: {report.pet.description}</p>
          <p>Zona: {report.location}</p>
          {report.reward ? <S.ReportReward>Se ofrece recompensa</S.ReportReward> : null}
        </div>
      </S.ReportDescription>
    </S.ReportCard>
  );
};

export default ReportCard;
