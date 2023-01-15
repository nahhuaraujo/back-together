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
          <S.ReportImg src={report.pet.img as string} />
          <S.ReportData>
            <ReportTitle report={report} />
            <div>
              <p>Descripcion</p>
              <p>Especie: {report.pet.species === 'cat' ? 'Gato' : 'Perro'}</p>
              <p>Raza: {report.pet.breed}</p>
              <p>Sexo: {report.pet.sex === 'male' ? 'Macho' : 'Hembra'}</p>
              <p>Zona: {report.location}</p>
            </div>
            <div>
              <p>Contacto</p>
              <p>Telefono: {report.user.phone}</p>
              <p>Email: {report.user.email}</p>
              {report.reward ? <p>Se ofrece recompensa</p> : null}
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
