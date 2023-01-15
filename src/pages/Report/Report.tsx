import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReportDetails } from '../../components';
import { IAppStore } from '../../redux/store';
import * as S from './Report.styled';

const Report = () => {
  const { list: reports } = useSelector((store: IAppStore) => store.report);
  const { id } = useParams();

  const report = reports.find(report => report._id === id);

  return (
    <S.Report>
      <ReportDetails report={report} />
    </S.Report>
  );
};

export default Report;
