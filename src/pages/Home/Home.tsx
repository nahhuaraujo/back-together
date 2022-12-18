import { PetCard } from '../../components';
import * as S from './Home.styled';
import { reports } from '../../data';

const Home = () => {
  return (
    <S.Home>
      {reports.map(report => (
        <PetCard key={report.id} report={report} />
      ))}
    </S.Home>
  );
};

export default Home;
