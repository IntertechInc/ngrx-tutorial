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
      return this.http.get<string>('login')
        .pipe(
          map((userName) => {
            return new authActions.SetAuths(userName);
          })
        )
    })
  );
}
