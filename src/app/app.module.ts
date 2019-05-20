import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorpionComponent } from './morpion/morpion.component';
import { StartPageComponent } from './morpion/start-page/start-page.component';
import { PlayersPageComponent } from './morpion/players-page/players-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MorpionComponent,
    StartPageComponent,
    PlayersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
