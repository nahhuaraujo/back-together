import { IPet, IUser } from './';

export interface IReport {
  id: string;
  pet: IPet;
  user: IUser;
  type: 'found' | 'lost';
  location: string;
  reward: boolean;
}
