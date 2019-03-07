import { Poney } from './../../interfaces/poney';
import { ActionTypes, PoneyAction } from './../actions/poney.actions';

export const poneyReducer = (state: Poney[] = [], action: PoneyAction) => {
  
  switch(action.type) {
    case ActionTypes.AddSuccess:
      return [...state, action.payload]
    case ActionTypes.DeleteSuccess:
      return state.filter(poney => poney.id !== action.payload)
    case ActionTypes.InitSuccess:
      return action.payload
    default:
      return state
  }

}