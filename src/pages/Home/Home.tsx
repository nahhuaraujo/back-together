import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CreateReportButton, PetCard } from '../../components';
import { useReportActions } from '../../hooks';
import { IAppStore } from '../../redux/store';
import * as S from './Home.styled';

const Home = () => {
  const { setReports } = useReportActions();
  const { user, report } = useSelector((store: IAppStore) => store);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACK_TOGETHER_API}/report/find-all`);
      setReports(response.data.payload);
    })();
  }, []);

  return (
    <S.Home>
      {user.token ? <CreateReportButton /> : null}
      {report.list.map(report => (
        <PetCard key={report._id} report={report} />
      ))}
    </S.Home>
  );
};

export default Home;
