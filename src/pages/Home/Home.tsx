import { useSelector } from 'react-redux';
import { CreateReportButton, ReportCard } from '../../components';
import { useReports } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const { user } = useSelector((store: IAppStore) => store);
  const { reports } = useReports();

  return (
    <S.Home>
      {user.token ? <CreateReportButton /> : null}
      {reports.map(report => (
        <ReportCard key={report._id} report={report} />
      ))}
      {reports.length === 0 && <h2>No se encontraron reportes para mostrar</h2>}
    </S.Home>
  );
};

export default Home;
