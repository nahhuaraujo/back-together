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
      species: 'Perro',
      breed: 'Pitbull',
      sex: 'male',
      description: 'Gris',
      img: toto,
    },
    user: {
      id: 'asdsadsadasd',
      email: 'test@test.com',
      phoneNumber: '112333232',
    },
    type: 'found',
    location: 'El barrio del hospital San Luis',
    reward: false,
  },
  {
    id: 'asjdhbasdhjsdasd',
    pet: {
      name: 'Coco',
      species: 'Gato',
      breed: 'Bengala',
      sex: 'male',
      description: 'Manchado',
      img: coco,
    },
    user: {
      id: 'asdsadsadasd',
      email: 'test@test.com',
      phoneNumber: '112333232',
    },
    type: 'lost',
    location: 'Cerca del centro',
    reward: true,
  },
  {
    id: 'asjdhbasdhjddsads',
    pet: {
      species: 'Perro',
      breed: 'Golden retriever',
      sex: 'female',
      description: 'Marron',
      img: mona,
    },
    user: {
      id: 'asdsadsadasd',
      email: 'test@test.com',
      phoneNumber: '112333232',
    },
    type: 'found',
    location: 'Sarmiento y Moreau de Justo',
    reward: false,
  },
  {
    id: 'asjdhbasdhjasdasd',
    pet: {
      species: 'Gato',
      breed: 'Persa',
      sex: 'female',
      description: 'Blanco',
      img: lala,
    },
    user: {
      id: 'asdsadsadasd',
      email: 'test@test.com',
      phoneNumber: '112333232',
    },
    type: 'found',
    location: 'El barrio las violetas',
    reward: false,
  },
  {
    id: 'asjdhbasdhjasdasdasdasdasd',
    pet: {
      name: 'Nala',
      species: 'Gato',
      breed: 'Sphynx',
      sex: 'female',
      description: 'Piel',
      img: nala,
    },
    user: {
      id: 'asdsadsadasd',
      email: 'test@test.com',
      phoneNumber: '112333232',
    },
    type: 'lost',
    location: 'Por la casa',
    reward: true,
  },
  {
    id: 'asjdhbasdhjasdasdasdasdasdasdasdasd',
    pet: {
      species: 'Gato',
      breed: 'Salvaje',
      sex: 'male',
      description: 'Blanco',
      img: laexcepcion,
    },
    user: {
      id: 'asdsadsadasd',
      email: 'test@test.com',
      phoneNumber: '112333232',
    },
    type: 'found',
    location: 'En todos lados',
    reward: false,
  },
];
