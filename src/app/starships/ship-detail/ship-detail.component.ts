import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromStore from "../store/reducers";
import { StarShip } from "../../models/star-ship.model";

@Component({
  selector: "app-ship-detail",
  templateUrl: "./ship-detail.component.html",
  styleUrls: ["./ship-detail.component.css"]
})
export class ShipDetailComponent implements OnInit {
  starShip$: Observable<StarShip>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.starShip$ = this.store.select(fromStore.getCurrentShip);
  }
}
