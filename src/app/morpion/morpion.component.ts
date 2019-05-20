import { Component, OnInit, Input } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent implements OnInit {
  @Input() player: Player;
  
  morpionGame: String[3][3];
  // plays: String[] = [];

  constructor() { }

  getPlayer() {
    
    return
  }


  checkValue(rowIndex: number, colIndex: number) {
    if (!this.morpionGame[rowIndex][colIndex]) {
      // Mettre caractere du joueur qui joue X ou O
      // Code...
      //checkGame()
    }
    let pl1 = new Player();
    pl1.tag = "Player 1";

    switch (pl1.tag) {
      case "Player 1":
        console.log("Player 1" + " => " + rowIndex + colIndex + " clicked");
        break;

      case "Player 2":
        console.log("Player 2" + " => " + rowIndex + colIndex + " clicked");
        break;

        default: console.log("Player ?" + " => " + rowIndex + colIndex + " clicked");
        break;
    }
  }

  checkGame() {

  }

  ngOnInit() {
  }

}
