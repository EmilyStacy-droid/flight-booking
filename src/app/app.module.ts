import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as components from './index';

@NgModule({
  declarations: [
    AppComponent,
    components.SearchComponent,
    components.FlightListComponent,
    components.BookingComponent,
    components.FlightBookedComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
