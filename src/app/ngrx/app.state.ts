import { Race } from './../interfaces/race';
import { Poney } from './../interfaces/poney';

export interface AppState {
  ponies: Poney[]
  races: Race[]
}