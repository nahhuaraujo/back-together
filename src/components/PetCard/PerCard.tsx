import * as S from './PetCard.styled';

const PetCard = () => {
  return (
    <S.PetCard>
      <S.PetImage />
      <S.PetReport>
        <h2>Toto</h2>
        <div>
          <p>Se perdio por el centro</p>
          <p>Se ofrece recompenza</p>
        </div>
      </S.PetReport>
    </S.PetCard>
  );
};

export default PetCard;
