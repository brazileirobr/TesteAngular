import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BaseModule } from './base';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    BrowserAnimationsModule,

    AppRoutingModule
  ],
  exports:
    [
      AppRoutingModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
