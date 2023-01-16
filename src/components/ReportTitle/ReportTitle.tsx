import { IReport } from '../../models';
import * as S from './ReportTitle.styled';

interface IProps {
  report: IReport;
}
const ReportTitle = ({ report }: IProps) => {
  return (
    <S.ReportTitle>
      {report.pet.name}
      {report.type === 'lost' && report.pet.sex === 'male' && ' está perdido'}
      {report.type === 'lost' && report.pet.sex === 'female' && ' está perdida'}
      {report.type === 'found' && report.pet.sex === 'male' && report.pet.species === 'dog' && `Perro macho encontrado`}
      {report.type === 'found' &&
        report.pet.sex === 'female' &&
        report.pet.species === 'dog' &&
        `Perra hembra encontrada`}
      {report.type === 'found' && report.pet.sex === 'male' && report.pet.species === 'cat' && `Gato macho encontrado`}
      {report.type === 'found' &&
        report.pet.sex === 'female' &&
        report.pet.species === 'cat' &&
        `Gata hembra encontrada`}
    </S.ReportTitle>
  );
};

export default ReportTitle;
