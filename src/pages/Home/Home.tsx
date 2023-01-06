import { useSelector } from 'react-redux';
import { CreateReportButton, ReportCard } from '../../components';
import { useReports } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const { user } = useSelector((store: IAppStore) => store);
  const { list } = useReports();

  return (
    <S.Home>
      {user.token ? <CreateReportButton /> : null}
      {list.map(report => (
        <ReportCard key={report._id} report={report} />
      ))}
      {list.length === 0 && <h2>No se encontraron reportes para mostrar</h2>}
    </S.Home>
  );
};

export default Home;
