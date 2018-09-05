import {Injectable} from '@angular/core';
import {Piece} from '../classes/Piece';
import {PiecesFactory} from '../classes/PiecesFactory';

const GAME_SPEED = 1000;
const SPAWN_POSITION_X = 3;
const SPAWN_POSITION_Y = -4;

@Injectable()
export class GameManagerService {
    // serialized grid :)
    public grid: Array<any>;

    private _gridSize: {
        width: number,
        height: number
    } = { width: 0, height: 0 };

    private _piece: Piece;
    private _piecesFactory: PiecesFactory;

    constructor() {
    }

    public initialize(width: number, height: number) {
        this._gridSize.width = width;
        this._gridSize.height = height;

        this._initializeEmptyBoard();

        this._piecesFactory = new PiecesFactory(this._gridSize);

        this._spawnNewPiece();
        this._drawPiece();

        setInterval(() => {
            this._update();
        }, GAME_SPEED);
    }

    public moveLeft() {
        if (this._canMoveLeft()) {
            this._clearPiece();
            this._piece.moveLeft();
            this._drawPiece();
        }
    }

    public moveRight() {
        if (this._canMoveRight()) {
            this._clearPiece();
            this._piece.moveRight();
            this._drawPiece()
        }
    }

    public rotate() {
        this._clearPiece();
        this._piece.rotate();
        this._drawPiece()
    }

    private _update() {
        if (this._canMoveDown()) {
            this._clearPiece();
            this._piece.moveDown();

        } else {
            this._markSolid();
            this._spawnNewPiece()
        }

        this._drawPiece();
    }

    private _spawnNewPiece() {
        this._piece = this._piecesFactory.drawPiece(SPAWN_POSITION_X, SPAWN_POSITION_Y);
    }

    private _initializeEmptyBoard() {
        let cellsCount = this._gridSize.width * this._gridSize.height;
        this.grid = Array.apply(null, Array(cellsCount))
            .map((idx) => {
                return {
                    color: null,
                    solid: false
                }
            });
    }

    private _clearPiece() {
        this._piece.getPositionsOnGrid()
            .forEach((pos) => {
                this.grid[pos].color = undefined;
            });
    }
    
    private _drawPiece() {
        this._piece.getPositionsOnGrid()
            .forEach((pos) => {
                this.grid[pos].color = this._piece.color;
            });
    }

    private _markSolid(){
        this._piece.getPositionsOnGrid().forEach((pos) => {
            this.grid[pos].solid = true;
        })
    }

    private _canMoveDown() {
        if (this._piece.bottomRow + 1 >= this._gridSize.height) {
            return false;

        } else if (this._willCollideBottom()) {
            return false;
        }

        return true;
    }

    private _canMoveLeft() {
        if (this._piece.leftCol - 1 < 0) {
            return false;

        } else if (this._willCollideLeft()) {
            return false;
        }

        return true;
    }

    private _canMoveRight() {
        if (this._piece.rightCol + 1 >= this._gridSize.width) {
            return false;

        } else if (this._willCollideLeft()) {
            return false;
        }

        return true;
    }

    /**
     * Checks if when moved down by one row would collide
     * @returns {boolean}
     * @private
     */
    private _willCollideBottom() {
        return this._piece.getPositionsOnGrid('bottom', 0, 1)
            .some((pos) => {
                if (pos > 0 && this.grid[pos] && this.grid[pos].solid) {
                    return true;
                }

                return false;
            });
    }

    private _willCollideLeft() {
        return this._piece.getPositionsOnGrid('left', -1)
            .some((pos) => {
                if (pos > 0 && this.grid[pos] && this.grid[pos].solid) {
                    return true;
                }

                return false;
            });
    }

    private _willCollideRight() {
        return this._piece.getPositionsOnGrid('right', 1)
            .some((pos) => {
                if (pos > 0 && this.grid[pos] && this.grid[pos].solid) {
                    return true;
                }

                return false;
            });
    }

}