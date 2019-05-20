import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {

  player1Ready: boolean = false;
  allPlayersOk: boolean = false;


  constructor() { }

  onPlayerClicked(currentplayer: Number) {
    if (currentplayer === 1) {
      this.player1Ready = true; 
    }
    if (currentplayer === 2 && this.player1Ready) {
      this.allPlayersOk = true;
    }
  }

  ngOnInit() {
  }

}
