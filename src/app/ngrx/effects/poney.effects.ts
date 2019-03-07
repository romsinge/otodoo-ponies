import { ActionTypes, InitPoniesSuccess, DeletePoney, DeletePoneySuccess, AddPoney, AddPoneySuccess } from './../actions/poney.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Injectable()
export class PoneyEffects {

  @Effect()
  init$ = this.actions$.pipe(
    ofType(ActionTypes.Init),
    mergeMap(() => {
      return this.dataService.ponies.pipe(map(ponies => {
        return new InitPoniesSuccess(ponies)
      }))
    })
  )

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(ActionTypes.Delete),
    mergeMap((action: DeletePoney) => {
      return this.dataService.deletePoney(action.payload).pipe(map(() => {
        return new DeletePoneySuccess(action.payload)
      }))
    })
  )

  @Effect()
  add$ = this.actions$.pipe(
    ofType(ActionTypes.Add),
    mergeMap((action: AddPoney) => {
      return this.dataService.savePoney(action.payload).pipe(map(poney => {
        return new AddPoneySuccess(poney)
      }))
    })
  )

  constructor(private actions$: Actions, private dataService: DataService) {}
}