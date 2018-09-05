import {Component, Input, OnInit} from '@angular/core';
import {GameManagerService} from "./services/game-manager.service";

const GAME_SPEED = 1000;

@Component({
    selector: 'tetris-core',
    templateUrl: './tetris-core.component.html',
    styleUrls: ['./tetris-core.component.css']
})
export class TetrisCoreComponent implements OnInit {
    @Input() rotate = false;
    @Input() moveLeft = false;
    @Input() moveRight = false;
    @Input() moveDown = false;

    gridWidth: number = 10;
    gridHeight: number = 20;

    constructor(private _manager: GameManagerService) {
        this._manager.initialize(this.gridWidth, this.gridHeight, GAME_SPEED);
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (this._keyPressed(changes.moveLeft)) {
            this._manager.moveLeft();
        } else if (this._keyPressed(changes.moveRight)) {
            this._manager.moveRight();
        }

        if (this._keyPressed(changes.rotate)) {
            this._manager.rotate();
        }
    }

    _keyPressed(key) {
        return key && key.currentValue && !key.previousValue;
    }
}
