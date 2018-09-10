import { StarShip } from "src/app/models/star-ship.model";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromStore from "../store/reducers";
import * as fromRoot from "src/app/store/reducers";
import { LoadShips } from "../store/actions/ships.actions";

@Component({
  selector: "app-ship-list",
  templateUrl: "./ship-list.component.html",
  styleUrls: ["./ship-list.component.css"]
})
export class ShipListComponent implements OnInit {
  starships$: Observable<StarShip[]>;
  user$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.starships$ = this.store.select(fromStore.getAllShipsWithId);
    this.user$ = this.store.select(fromRoot.getFriendlyName);

    this.store.dispatch(new LoadShips());
  }
}
