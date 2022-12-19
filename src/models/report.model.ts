import { IPet } from './';

export interface IReport {
  id: string;
  pet: IPet;
  type: 'found' | 'lost';
  location: string;
  reward: boolean;
}
