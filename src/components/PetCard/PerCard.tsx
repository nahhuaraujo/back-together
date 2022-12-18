import * as S from './PetCard.styled';
import { IReport } from '../../models';

interface IProps {
  report: IReport;
}

const PetCard = ({ report }: IProps) => {
  return (
    <S.PetCard>
      <S.PetImage src={report.pet.img} />
      <S.PetReport>
        <h2>{report.pet.name}</h2>
        <div>
          <p>{report.lostAround}</p>
          <p>{report.reward ? 'Se ofrece recompenza' : null}</p>
        </div>
      </S.PetReport>
    </S.PetCard>
  );
};

export default PetCard;
