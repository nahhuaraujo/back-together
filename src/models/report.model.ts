import { IPet } from './';

export interface IReport {
  id: string;
  pet: IPet;
  lostAround: string;
  reward: boolean;
}
