import { IReport } from '../models';

import coco from '../assets/pets/Bengal.jpg';
import laexcepcion from '../assets/pets/Cool-cat.jpg';
import mona from '../assets/pets/Golden.jpg';
import lala from '../assets/pets/Persian.jpg';
import toto from '../assets/pets/Pitbull.jpg';
import nala from '../assets/pets/Sphynx.jpg';

export const reports: IReport[] = [
  {
    id: 'asjdhbasdhj',
    pet: {
      id: 'asdasddas',
      name: 'Toto',
      species: 'Perro',
      breed: 'Pitbull',
      sex: 'male',
      color: 'Gris',
      img: toto,
    },
    type: 'found',
    location: 'El barrio del hospital San Luis',
    reward: false,
  },
  {
    id: 'asjdhbasdhjsdasd',
    pet: {
      id: 'akjsdlkjnsa',
      name: 'Coco',
      species: 'Gato',
      breed: 'Bengala',
      sex: 'male',
      color: 'Manchado',
      img: coco,
    },
    type: 'lost',
    location: 'Cerca del centro',
    reward: true,
  },
  {
    id: 'asjdhbasdhjddsads',
    pet: {
      id: 'asdjnlasdmlas',
      name: 'Mona',
      species: 'Perro',
      breed: 'Golden retriever',
      sex: 'female',
      color: 'Marron',
      img: mona,
    },
    type: 'found',
    location: 'Sarmiento y Moreau de Justo',
    reward: false,
  },
  {
    id: 'asjdhbasdhjasdasd',
    pet: {
      id: 'asldnkasdlm',
      name: 'Lala',
      species: 'Gato',
      breed: 'Persa',
      sex: 'female',
      color: 'Blanco',
      img: lala,
    },
    type: 'found',
    location: 'El barrio las violetas',
    reward: false,
  },
  {
    id: 'asjdhbasdhjasdasdasdasdasd',
    pet: {
      id: 'asjkdbljkasd',
      name: 'Nala',
      species: 'Gato',
      breed: 'Sphynx',
      sex: 'female',
      color: 'Piel',
      img: nala,
    },
    type: 'lost',
    location: 'Por la casa',
    reward: true,
  },
  {
    id: 'asjdhbasdhjasdasdasdasdasdasdasdasd',
    pet: {
      id: 'asdasdasdasdasda',
      name: 'La excepcion a la regla',
      species: 'Gato',
      breed: 'Salvaje',
      sex: 'male',
      color: 'Blanco',
      img: laexcepcion,
    },
    type: 'found',
    location: 'En todos lados',
    reward: false,
  },
];
