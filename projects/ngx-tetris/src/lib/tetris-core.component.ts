import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChange,
  SimpleChanges
} from '@angular/core';
import {GameManagerService, Tile} from './services/game-manager.service';

const GAME_SPEED = 500;
const MOVE_DOWN_SPEED = 0.2; // fraction of initial game speed

export enum GameState {
    Paused = 0,
    Started = 1,
    Over = 2
}

@Component({
    selector: 'tetris-core',
    templateUrl: './tetris-core.component.html',
    // styleUrls: ['./tetris-core.component.css']
})
export class TetrisCoreComponent implements OnInit, OnChanges {
    @Input() tileSize: any;

    @Input() initialSpeed: number = GAME_SPEED;
    @Input() rotate = false;
    @Input() moveLeft = false;
    @Input() moveRight = false;
    @Input() moveDown = false;
    @Input() drop = false;
    @Input() start = false;
    @Input() stop = false;
    @Input() reset = false;

    @Output() lineCleared: EventEmitter<any> = new EventEmitter();
    @Output() gameOver: EventEmitter<any> = new EventEmitter();

    public grid: Array<Tile>;
    public state: GameState = GameState.Paused;

    gridWidth = 10;
    gridHeight = 20;

    private _moveDownSpeed = GAME_SPEED * MOVE_DOWN_SPEED;

    constructor(private _manager: GameManagerService) {
        this._manager.lineCleared$.subscribe(() => this._onLineCleared());
        this._manager.gameOver$.subscribe(() => this._onGameOver());
    }

    ngOnInit() {
      this._moveDownSpeed = this.initialSpeed * MOVE_DOWN_SPEED;

      this._manager.initialize(this.gridWidth, this.gridHeight, this.initialSpeed, this.tileSize);
      this.grid = this._manager.grid;

      setInterval(() => {
        if (this.moveDown) {
          this._manager.moveDown();
        }

      }, this._moveDownSpeed);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this._keyPressed(changes['moveLeft'])) {
            this._manager.moveLeft();
        } else if (this._keyPressed(changes['moveRight'])) {
            this._manager.moveRight();
        } else if (this._keyPressed(changes['drop'])) {
            this._manager.drop();
        }

        if (this._keyPressed(changes['rotate'])) { this._manager.rotate(); }
        if (this._keyPressed(changes['start']))  { this._manager.start(); }
        if (this._keyPressed(changes['stop']))  { this._manager.stop(); }
        if (this._keyPressed(changes['reset']))  { this._manager.reset(); }
    }

    public actionLeft() { this._manager.moveLeft(); }
    public actionRight() { this._manager.moveRight(); }
    public actionRotate() { this._manager.rotate(); }
    public actionDown() { this._manager.moveDown(); }
    public actionDrop() { this._manager.drop(); }
    public actionReset() { this._manager.reset(); }

    public actionStart() {
        this._manager.start();
        this.state = GameState.Started;
    }
    public actionStop() {
        this._manager.stop();
        this.state = GameState.Paused;
    }

    private _keyPressed(key: SimpleChange) {
        return key && key.currentValue && !key.previousValue;
    }

    private _onLineCleared() {
        this.lineCleared.emit();
    }

    private _onGameOver() {
        this.state = GameState.Over;
        this.gameOver.emit();
    }
}
