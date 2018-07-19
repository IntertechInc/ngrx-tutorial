import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import * as authActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private http: HttpClient) {}

  @Effect()
  loadAuths$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/people/1/`)
        .pipe(
          map((person) => {
            const name: string = person.name;
            return new authActions.SetAuths({
              userName: name.replace(" ", ""),
              friendlyName: name
            });
          })
        )
    })
  );
}
