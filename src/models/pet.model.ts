export interface IPet {
  id: string;
  name?: string;
  species: string;
  breed: string;
  sex: 'male' | 'female';
  color: string;
  img: string;
}
