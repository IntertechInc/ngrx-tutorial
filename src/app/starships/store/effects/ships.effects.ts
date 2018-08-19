import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShipsActions, ShipsActionTypes } from '../actions/ships.actions';
import { switchMap, map } from 'rxjs/operators';
import { StarShip } from 'src/app/models/star-ship.model';
import * as shipActions from 'src/app/starships/store/actions/ships.actions';

@Injectable()
export class ShipsEffects {

  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShips),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/starships`)
        .pipe(
          map((response) => {
            return new shipActions.SetShips(response.results);
          })
        )
    })
  );

  constructor(private actions$: Actions,
              private http: HttpClient) {}
}
