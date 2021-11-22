import {Injectable} from '@angular/core';
import {Piece} from '../classes/Piece';
import {PiecesFactory} from '../classes/PiecesFactory';
import {Observable} from 'rxjs/internal/Observable';
import {Subject} from 'rxjs/internal/Subject';

const SPAWN_POSITION_X = 4;
const SPAWN_POSITION_Y = -4;

export class Tile {
    solid = false;
    color = null;
}

@Injectable()
export class GameManagerService {
    public settings = {
        tileSize: null
    };

    public get elementsInRow() {
        return this._gridSize.width;
    }

    // serialized grid :)
    public grid: Array<Tile>;

    public lineCleared$: Observable<any>;
    public gameOver$: Observable<any>;

    private _gridSize: {
        width: number,
        height: number
    } = { width: 0, height: 0 };

    private _piece: Piece;
    private _piecesFactory: PiecesFactory;

    private _locked = true;
    private _gameSpeed: number;
    private _gameInterval: number|undefined;

    private _lineCleared = new Subject<void>();
    private _gameOver = new Subject<void>();

    constructor() {
        this.lineCleared$ = this._lineCleared.asObservable();
        this.gameOver$ = this._gameOver.asObservable();
    }

    public initialize(width: number, height: number, gameSpeed: number, tileSize?: any) {
        this._gridSize.width = width;
        this._gridSize.height = height;
        this._gameSpeed = gameSpeed;
        this._piecesFactory = new PiecesFactory(this._gridSize);

        if (tileSize) {
            this.settings.tileSize = tileSize;
        }

        this._initializeEmptyBoard();

        this._spawnNewPiece();
        this._drawPiece();
    }

    public start() {
        clearInterval(this._gameInterval);
        this._gameInterval = setInterval(() => {
            this._update();
        }, this._gameSpeed);
        this._locked = false;
    }

    public stop() {
        this._locked = true;
        clearInterval(this._gameInterval);
    }

    public reset() {
        const emptyTile = new Tile();
        for (let pos = 0; pos < this.grid.length; pos++) {
            if (this.grid[pos].color || this.grid[pos].solid) {
                this.__changeCell(pos, emptyTile);
            }
        }

        this._spawnNewPiece();
        this._drawPiece();
    }

    public moveLeft() {
        if (this._locked) {
            return;
        }
        this._clearPiece();
        this._piece.store();

        this._piece.moveLeft();
        if (this._collidesLeft()) {
            this._piece.revert();
        }

        this._drawPiece();
    }

    public moveRight() {
        if (this._locked) {
            return;
        }
        this._clearPiece();
        this._piece.store();

        this._piece.moveRight();
        if (this._collidesRight()) {
            this._piece.revert();
        }

        this._drawPiece();
    }

    public rotate() {
        if (this._locked) {
            return;
        }

        this._clearPiece();
        this._piece.store();

        this._piece.rotate();
        while (this._collidesRight()) {
            this._piece.moveLeft();

            if (this._collidesLeft()) {
                this._piece.revert();
                break;
            }
        }

        this._drawPiece();
    }

    public moveDown() {
        this._update();
    }

    private _clearFullLines() {
        for (let row = this._gridSize.height - 1; row >= 0; row--) {
            let isFull = true;
            for (let col = 0; col < this._gridSize.width; col++) {
                const pos = row * this._gridSize.width + col;
                if (this.grid[pos].solid === false) {
                    isFull = false;
                    break;
                }
            }

            if (isFull) {
                const emptyRow = Array.apply(null, Array(this._gridSize.width))
                    .map((idx) => new Tile());

                const topPortion = this.grid.slice(0, row * this._gridSize.width);

                this.grid.splice(0, ++row * this._gridSize.width, ...emptyRow.concat(topPortion));
                this._lineCleared.next();
            }
        }
    }

    private _update() {
        if (this._locked) {
            return;
        }
        this._locked = true;
        this._piece.revert();

        this._clearPiece();
        this._piece.store();

        this._piece.moveDown();
        if (this._collidesBottom()) {
            this._piece.revert();
            this._markSolid();
            this._drawPiece();

            this._clearFullLines();

            this._spawnNewPiece();
            if (this._isGameOver()) {
                this._onGameOver();
                return;
            }
        }

        this._drawPiece();
        this._locked = false;
    }

    private _isGameOver() {
        this._piece.store();
        this._piece.moveDown();
        if (this._collidesBottom()) {
            return true;
        }

        this._piece.revert();
        return false;
    }

    private _onGameOver() {
        this.stop();
        this._gameOver.next();
    }

    private _spawnNewPiece() {
        this._piece = this._piecesFactory.getRandomPiecePiece(SPAWN_POSITION_X, SPAWN_POSITION_Y);
    }

    private _initializeEmptyBoard() {
        const cellsCount = this._gridSize.width * this._gridSize.height;
        this.grid = Array.apply(null, Array(cellsCount))
            .map((idx) => new Tile());
    }

    private _clearPiece() {
        this._piece.positionsOnGrid
            .forEach((pos) => {
                this.__changeCell(pos, {color: undefined});
            });
    }

    private _drawPiece() {
        this._piece.clearStore();
        this._piece.positionsOnGrid
            .forEach((pos) => {
                this.__changeCell(pos, {color: this._piece.color});
            });
    }

    private _markSolid() {
        this._piece.positionsOnGrid.forEach((pos) => {
            this.__changeCell(pos, {solid: true});
        });
    }

    private __changeCell(pos: number, data = {}) {
        this.grid[pos] = Object.assign({}, this.grid[pos], data);
    }

    private _collidesBottom() {
        if (this._piece.bottomRow >= this._gridSize.height) {
            return true;
        }
        return this.__collides();
    }

    private _collidesLeft() {
        if (this._piece.leftCol < 0) {
            return true;
        }

        return this.__collides();
    }

    private _collidesRight() {
        if (this._piece.rightCol >= this._gridSize.width) {
            return true;
        }

        return this.__collides();
    }

    private __collides() {
        return this._piece.positionsOnGrid
            .some((pos) => {
                if (pos > 0 && this.grid[pos] && this.grid[pos].solid) {
                    return true;
                }

                return false;
            });
    }
}
