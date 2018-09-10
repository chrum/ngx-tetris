import {Component, Input, OnInit} from '@angular/core';
import {GameManagerService} from "./services/game-manager.service";

const GAME_SPEED = 500;
const MOVE_DOWN_SPEED = 0.2; // fraction of initial game speed

@Component({
    selector: 'tetris-core',
    templateUrl: './tetris-core.component.html',
    // styleUrls: ['./tetris-core.component.css']
})
export class TetrisCoreComponent implements OnInit {
    @Input() initialSpeed: number;
    @Input() rotate = false;
    @Input() moveLeft = false;
    @Input() moveRight = false;
    @Input() moveDown = false;

    gridWidth: number = 10;
    gridHeight: number = 20;

    private _moveDownSpeed;

    constructor(private _manager: GameManagerService) {
        this.initialSpeed = this.initialSpeed | GAME_SPEED;
        this._moveDownSpeed = this.initialSpeed * MOVE_DOWN_SPEED;

        this._manager.initialize(this.gridWidth, this.gridHeight, this.initialSpeed);

        setInterval(() => {
            if (this.moveDown) {
                this._manager.moveDown();
            }

        }, this._moveDownSpeed);
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
