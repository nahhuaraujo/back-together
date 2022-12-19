import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PetCard } from '../../components';
import { reports } from '../../data';
import { IReport } from '../../models';
import { IAppStore } from '../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const [filteredReports, setFilteredReports] = useState<IReport[]>([]);
  const { filter } = useSelector((store: IAppStore) => store.ui);

  useEffect(() => {
    if (filter === 'all') return setFilteredReports(reports);
    if (filter === 'found') return setFilteredReports(reports.filter(report => report.type === 'found'));
    if (filter === 'lost') return setFilteredReports(reports.filter(report => report.type === 'lost'));
  }, [filter]);

  return (
    <S.Home>
      {filteredReports.map(report => (
        <PetCard key={report.id} report={report} />
      ))}
    </S.Home>
  );
};

export default Home;
