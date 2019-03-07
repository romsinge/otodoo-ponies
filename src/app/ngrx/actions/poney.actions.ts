import { Poney } from './../../interfaces/poney';
import { Action } from '@ngrx/store'

export enum ActionTypes {
  Add = '[Poney] Add',
  AddSuccess = '[Poney] Add Success',
  Delete = '[Poney] Delete',
  DeleteSuccess = '[Poney] Delete Success',
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

export class AddPoneySuccess implements Action {
  type: string = ActionTypes.AddSuccess

  constructor(public payload: Poney) {}
}

export class DeletePoney implements Action {
  type: string = ActionTypes.Delete

  // payload : poney id
  constructor(public payload: string) {}
}

export class DeletePoneySuccess implements Action {
  type: string = ActionTypes.DeleteSuccess

  // payload : poney id
  constructor(public payload: string) {}
}

export type PoneyAction = AddPoneySuccess | DeletePoneySuccess | InitPoniesSuccess