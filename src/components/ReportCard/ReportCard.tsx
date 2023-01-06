import { IReport } from '../../models';
import * as S from './ReportCard.styled';

interface IProps {
  report: IReport;
}

const ReportCard = ({ report }: IProps) => {
  return (
    <S.ReportCard>
      <S.ReportImage src={report.pet.img} />
      <S.ReportDescription>
        <h2>
          <p>
            {report.pet.name}
            {report.type === 'lost' && report.pet.sex === 'male' && ' esta perdido'}
            {report.type === 'lost' && report.pet.sex === 'female' && ' esta perdida'}
          </p>
          <p>
            {report.type === 'found' &&
              report.pet.sex === 'male' &&
              report.pet.species === 'dog' &&
              `Perro macho encontrado`}
          </p>
          <p>
            {report.type === 'found' &&
              report.pet.sex === 'female' &&
              report.pet.species === 'dog' &&
              `Perra hembra encontrada`}
          </p>

          <p>
            {report.type === 'found' &&
              report.pet.sex === 'male' &&
              report.pet.species === 'cat' &&
              `Gato macho encontrado`}
          </p>
          <p>
            {report.type === 'found' &&
              report.pet.sex === 'female' &&
              report.pet.species === 'cat' &&
              `Gata hembra encontrada`}
          </p>
        </h2>
        <div>
          <p>Zona: {report.location}</p>
          <p>Descripcion: {report.pet.description}</p>
          {report.reward ? <S.ReportReward>Se ofrece recompensa</S.ReportReward> : null}
        </div>
      </S.ReportDescription>
    </S.ReportCard>
  );
};

export default ReportCard;
