import {Component, OnInit} from '@angular/core';
import {GameManagerService} from "./services/game-manager.service";

@Component({
    selector: 'tetris-core',
    templateUrl: './tetris-core.component.html',
    styleUrls: ['./tetris-core.component.css']
})
export class TetrisCoreComponent implements OnInit {
    gridWidth: number = 10;
    gridHeight: number = 20;

    constructor(private _manager: GameManagerService) {
        this._manager.initialize(this.gridWidth, this.gridHeight);
    }

    ngOnInit() {
    }

    moveLeft() {
        this._manager.moveLeft();
    }

    moveRight() {
        this._manager.moveRight();
    }

    rotate() {
        this._manager.rotate();
    }

}
