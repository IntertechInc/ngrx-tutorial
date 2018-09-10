import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromShips from './store/reducers/index';
import { ShipsEffects } from './store/effects/ships.effects';
import { ShipListComponent } from './ship-list/ship-list.component';
import { StarshipRoutingModule } from './starships-routing.module';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StarshipRoutingModule,
    StoreModule.forFeature('starships', fromShips.reducers),
    EffectsModule.forFeature([ShipsEffects])
  ],
  declarations: [ShipListComponent, ShipDetailComponent]
})
export class StarshipsModule { }
