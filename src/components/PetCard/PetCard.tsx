import { IReport } from '../../models';
import * as S from './PetCard.styled';

interface IProps {
  report: IReport;
}

const PetCard = ({ report }: IProps) => {
  return (
    <S.PetCard>
      <S.PetImage src={report.pet.img} />
      <S.PetReport>
        <h2>
          {report.pet.name}
          {report.type === 'found' && report.pet.sex === 'male' && ' fue encontrado'}
          {report.type === 'lost' && report.pet.sex === 'male' && ' esta perdido'}
          {report.type === 'found' && report.pet.sex === 'female' && ' fue encontrada'}
          {report.type === 'lost' && report.pet.sex === 'female' && ' esta perdida'}
          <span>{` (${report.pet.species} ${report.pet.sex === 'male' ? 'macho' : 'hembra'})`}</span>
        </h2>
        <div>
          <p>{report.location}</p>
          <p>{report.reward ? 'Se ofrece recompenza' : null}</p>
        </div>
      </S.PetReport>
    </S.PetCard>
  );
};

export default PetCard;
