import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipListComponent } from './ship-list/ship-list.component';
 
const starshipRoutes: Routes = [
  { path: '',  component: ShipListComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(starshipRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StarshipRoutingModule { }
