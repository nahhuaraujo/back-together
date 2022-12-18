import { IReport } from '../models';

import toto from '../assets/pets/Pitbull.jpg';
import coco from '../assets/pets/Bengal.jpg';
import mona from '../assets/pets/Golden.jpg';
import lala from '../assets/pets/Persian.jpg';
import nala from '../assets/pets/Sphynx.jpg';

export const reports: IReport[] = [
  {
    id: 'asjdhbasdhj',
    pet: {
      id: 'asdasddas',
      name: 'Toto',
      species: 'Perro',
      breed: 'Pitbull',
      sex: 'Macho',
      color: 'Gris',
      img: toto,
    },
    lostAround: 'El barrio del hospital San Luis',
    reward: true,
  },
  {
    id: 'asjdhbasdhjsdasd',
    pet: {
      id: 'akjsdlkjnsa',
      name: 'Coco',
      species: 'Gato',
      breed: 'Bengala',
      sex: 'Macho',
      color: 'Manchado',
      img: coco,
    },
    lostAround: 'Cerca del centro',
    reward: true,
  },
  {
    id: 'asjdhbasdhjddsads',
    pet: {
      id: 'asdjnlasdmlas',
      name: 'Mona',
      species: 'Perro',
      breed: 'Golden retriever',
      sex: 'Hembra',
      color: 'Marron',
      img: mona,
    },
    lostAround: 'Sarmiento y Moreau de Justo',
    reward: false,
  },
  {
    id: 'asjdhbasdhjasdasd',
    pet: {
      id: 'asldnkasdlm',
      name: 'Lala',
      species: 'Gata',
      breed: 'Persa',
      sex: 'Hembra',
      color: 'Blanco',
      img: lala,
    },
    lostAround: 'El barrio las violetas',
    reward: true,
  },
  {
    id: 'asjdhbasdhjasdasdasdasdasd',
    pet: {
      id: 'asjkdbljkasd',
      name: 'Nala',
      species: 'Gata',
      breed: 'Sphynx',
      sex: 'Hembra',
      color: 'Piel',
      img: nala,
    },
    lostAround: 'Por su casa',
    reward: true,
  },
];
