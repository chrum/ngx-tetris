import {Dot} from './Dot';
import {Box} from './Box';
import {Line} from './Line';
import {T} from './T';

export class PiecesFactory {
    private _available = [];
    private _gridSize;

    constructor(gridSize) {
        this._gridSize = gridSize;
        this._available.push(Dot);
        this._available.push(Box);
        this._available.push(Line);
        this._available.push(T);
    }

    public drawPiece(x, y) {
        let idx = Math.floor(Math.random() * (this._available.length));

        // return new this._available[idx](x, y, this._gridSize);
        return new this._available[0](x, y, this._gridSize);
    }
}