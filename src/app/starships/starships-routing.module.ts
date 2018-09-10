import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShipListComponent } from "./ship-list/ship-list.component";
import { ShipDetailComponent } from "./ship-detail/ship-detail.component";

const starshipRoutes: Routes = [
  { path: "", component: ShipListComponent },
  { path: ":shipId/detail", component: ShipDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(starshipRoutes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule {}
