import { IReport } from '../../models';
import * as S from './ReportDetails.styled';
import { ReportTitle } from '../../components';

interface IProps {
  report: IReport | undefined;
}
const ReportDetails = ({ report }: IProps) => {
  return (
    <S.ReportDetails>
      {report !== undefined ? (
        <>
          <S.ReportImg src={`${process.env.REACT_APP_BACK_TOGETHER_URL}/img/pets/${report.pet.img}`} />
          <S.ReportData>
            <ReportTitle report={report} />
            <div>
              <S.ReportSubtitle>Descripción</S.ReportSubtitle>
              <p>Especie: {report.pet.species === 'cat' ? 'Gato' : 'Perro'}</p>
              <p>Raza: {report.pet.breed}</p>
              <p>Sexo: {report.pet.sex === 'male' ? 'Macho' : 'Hembra'}</p>
              <p>Zona: {report.location}</p>
            </div>
            <div>
              <S.ReportSubtitle>Contacto</S.ReportSubtitle>
              <p>Telefono: {report.user.phone}</p>
              <p>Email: {report.user.email}</p>
              {report.reward ? <S.ReportReward>Se ofrece recompensa</S.ReportReward> : null}
            </div>
          </S.ReportData>
        </>
      ) : (
        <div>El reporte no fue encontrado</div>
      )}
    </S.ReportDetails>
  );
};

export default ReportDetails;
