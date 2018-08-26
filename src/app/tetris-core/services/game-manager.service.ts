import {Injectable} from '@angular/core';
import {Piece} from '../classes/Piece';
import {PiecesFactory} from '../classes/PiecesFactory';

const GAME_SPEED = 500;

@Injectable()
export class GameManagerService {
    public grid: Array<any>;

    private _width: number;
    private _height: number;

    private _piece: Piece;
    private _piecesFactory: PiecesFactory = new PiecesFactory();

    constructor() {
    }

    public initialize(width: number, height: number) {
        this._width = width;
        this._height = height;

        this._initializeEmptyBoard();


        this._spawnNewPiece();
        this._drawPiece();

        setInterval(() => {
            this._update();
        }, GAME_SPEED);
    }

    private _update() {
        if (this._canMoveDown()) {
            this._drawPiece(true);
            this._piece.moveDown();

        } else {
            this._markSolid();
            this._spawnNewPiece()
        }

        this._drawPiece();
    }

    private _spawnNewPiece() {
        this._piece = this._piecesFactory.drawPiece(3, -4);
    }

    private _initializeEmptyBoard() {
        this.grid = Array.apply(null, Array(this._height * this._width))
            .map((idx) => {
                return {
                    color: null,
                    solid: false
                }
            });
    }
    
    private _drawPiece(clear: boolean = false) {
        this._onPieceCell((pos) => {
            if (clear) {
                this.grid[pos].color = undefined;

            } else {
                this.grid[pos].color = this._piece.color;
            }
        })
    }

    private _markSolid(){
        this._onPieceCell((pos) => {
            this.grid[pos].solid = true;
        })
    }

    /**
     * Executes function on grid cell that is occupied by piece
     * @param fnc
     * @private
     */
    private _onPieceCell(fnc) {
        for(let row = 0; row < 4; row++) {
            for(let col = 0; col < 4; col++) {
                if (this._piece.map[row][col]) {
                    let pos = (this._piece.y + row) * this._width + this._piece.x + col;
                    if (pos > 0) {
                        fnc(pos);
                    }
                }
            }
        }
    }

    private _canMoveDown() {
        if (this._piece.bottomRow + 1 >= this._height) {
            return false;

        } else if (this._collidesBottom()) {
            return false;
        }

        return true;
    }

    /**
     * Checks if when moved down by one row would collide
     * @returns {boolean}
     * @private
     */
    private _collidesBottom() {
        for(let row = 3; row > 1; row--) {
            for(let col = 0; col < 4; col++) {
                if (this._piece.map[row][col]) {
                    let pos = (this._piece.y + row + 1) * this._width + this._piece.x + col;
                    if (pos > 0 && this.grid[pos] && this.grid[pos].solid) {
                         return true;
                    }
                }
            }
        }

        return false;
    }

    private _canMoveLeft() {

    }

    private _canMoveRight() {

    }

}