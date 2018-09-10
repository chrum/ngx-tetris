import {Dot} from './Dot';
import {Box} from './Box';
import {Line} from './Line';
import {T} from './T';
import {Z} from './Z';
import {S} from './S';
import {L} from './L';
import {Lr} from './Lr';

export class PiecesFactory {
    private _available = [];
    private _gridSize;

    constructor(gridSize) {
        this._gridSize = gridSize;

        this._available.push(Dot);
        this._available.push(Box);
        this._available.push(Line);
        this._available.push(T);
        this._available.push(Z);
        this._available.push(S);
        this._available.push(L);
        this._available.push(Lr);
    }

    public getRandomPiecePiece(x, y) {
        let idx = Math.floor(Math.random() * (this._available.length));

        return new this._available[idx](x, y, this._gridSize);
        // return new this._available[2](x, y, this._gridSize);
    }
}