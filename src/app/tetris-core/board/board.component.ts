import { Component } from '@angular/core';
import {GameManagerService} from "../services/game-manager.service";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

    constructor(public manager: GameManagerService) {
    }

}
