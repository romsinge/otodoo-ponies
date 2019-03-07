import { Poney } from './../../interfaces/poney';
import { Action } from '@ngrx/store'

export enum ActionTypes {
  Add = '[Poney] Add',
  Delete = '[Poney] Delete',
  Init = '[Poney] Init',
  InitSuccess = '[Poney] Init Success'
}

export class InitPonies implements Action {
  type: string = ActionTypes.Init
}

export class InitPoniesSuccess implements Action {
  type: string = ActionTypes.InitSuccess

  constructor(public payload: Poney[]) {}
}

export class AddPoney implements Action {
  type: string = ActionTypes.Add

  constructor(public payload: Poney) {}
}

export class DeletePoney implements Action {
  type: string = ActionTypes.Delete

  // payload : poney id
  constructor(public payload: string) {}
}

export type PoneyAction = AddPoney | DeletePoney | InitPoniesSuccess