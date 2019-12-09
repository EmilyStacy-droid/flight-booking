import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as components from './index';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch:'full'},
  {path:'search', component:components.SearchComponent},
  {path:'flightlist', component:components.FlightListComponent},
  {path:"booking", component:components.BookingComponent},
  {path:"flightbooked", component:components.FlightBookedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
