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
          {report.type === 'lost' && report.pet.sex === 'male' && ' esta perdido'}
          {report.type === 'lost' && report.pet.sex === 'female' && ' esta perdida'}
          {report.type === 'found' && report.pet.sex === 'male' && `Perro macho encontrado`}
          {report.type === 'found' && report.pet.sex === 'female' && `Perra hembra encontrada`}
        </h2>
        <div>
          <p>{report.location}</p>
          <p>{report.pet.description}</p>
          <p>{report.reward ? 'Se ofrece recompenza' : null}</p>
        </div>
      </S.PetReport>
    </S.PetCard>
  );
};

export default PetCard;
