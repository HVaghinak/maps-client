import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    HttpClientModule
  ],
  declarations: [ AppComponent, MapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
