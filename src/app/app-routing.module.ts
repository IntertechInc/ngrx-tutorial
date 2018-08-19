import { NgModule } from "@angular/core";
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./welcome/welcome.component";

const appRoutes: Routes = [
  { path: 'app', component: WelcomeComponent },
  { path: 'ships', loadChildren: './starships/starships.module#StarshipsModule' },
  { path: '',   redirectTo: '/app', pathMatch: 'full' },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
