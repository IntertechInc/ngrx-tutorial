import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromShips from "./ships.reducer";
import * as fromRoot from "../../../store/reducers";

export interface StarshipsState {
  ships: fromShips.State;
}

export interface State extends fromRoot.State {
  starships: StarshipsState;
}

export const reducers: ActionReducerMap<StarshipsState> = {
  ships: fromShips.reducer
};

export const selectStarshipsState = createFeatureSelector<StarshipsState>(
  "starships"
);

export const selectShips = createSelector(
  selectStarshipsState,
  state => state.ships
);
export const getAllShips = createSelector(selectShips, fromShips.getAllShips);
export const getAllShipsWithId = createSelector(getAllShips, allShips => {
  if (allShips && allShips.length > 0) {
    allShips.forEach(s => {
      const regex = new RegExp(/.*\/(\d+)\/$/g);
      const match = regex.exec(s.url);
      if (match.length > 1) {
        s.id = +match[1];
      }
    });
  }
  return allShips;
});
export const getCurrentShip = createSelector(
  getAllShipsWithId,
  fromRoot.getRouterInfo,
  (ships, routerInfo) => {
    if (ships && ships.length > 0 && routerInfo) {
      const id = +routerInfo.params.shipId;
      if (id >= 0) {
        return ships.find(s => s.id === id);
      }
    }

    return null;
  }
);
