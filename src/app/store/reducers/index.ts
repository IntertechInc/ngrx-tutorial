import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from "@ngrx/router-store";

import { environment } from "../../../environments/environment";
import * as fromAuth from "./auth.reducer";
import { Params, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

export interface State {
  auth: fromAuth.State;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
// Auth selectors
export const selectAuthState = createFeatureSelector<fromAuth.State>("auth");
export const getUserName = createSelector(
  selectAuthState,
  fromAuth.getUserName
);
export const getFriendlyName = createSelector(
  selectAuthState,
  fromAuth.getFriendlyName
);

// Reducer selectors
export const selectReducerState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>("router");
export const getRouterInfo = createSelector(
  selectReducerState,
  state => state.state
);
