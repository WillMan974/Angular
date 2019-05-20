import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MorpionComponent } from './morpion/morpion.component';
import { StartPageComponent } from './morpion/start-page/start-page.component';
import { PlayersPageComponent } from './morpion/players-page/players-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/start-page', pathMatch:'full' },
  { path: 'start-page', component: StartPageComponent },
  { path: 'players-page', component: PlayersPageComponent },
  { path: 'morpion', component: MorpionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
