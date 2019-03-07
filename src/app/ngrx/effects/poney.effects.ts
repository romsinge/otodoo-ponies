import { ActionTypes, InitPoniesSuccess } from './../actions/poney.actions';
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

  constructor(private actions$: Actions, private dataService: DataService) {}
}