import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CreateReportButton, PetCard } from '../../components';
import { reports } from '../../data';
import { IReport } from '../../models';
import { IAppStore } from '../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const [filteredReports, setFilteredReports] = useState<IReport[]>([]);
  const { ui, user } = useSelector((store: IAppStore) => store);

  useEffect(() => {
    if (ui.filter === 'all') return setFilteredReports(reports);
    if (ui.filter === 'found') return setFilteredReports(reports.filter(report => report.type === 'found'));
    if (ui.filter === 'lost') return setFilteredReports(reports.filter(report => report.type === 'lost'));
  }, [ui.filter]);

  return (
    <S.Home>
      {user.token ? <CreateReportButton /> : null}
      {filteredReports.map(report => (
        <PetCard key={report.id} report={report} />
      ))}
    </S.Home>
  );
};

export default Home;
