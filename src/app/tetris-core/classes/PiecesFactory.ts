import {Dot} from './Dot';
import {Box} from './Box';
import {Line} from './Line';

export class PiecesFactory {
    private _available = [];

    constructor() {
        this._available.push(Dot);
        this._available.push(Box);
        this._available.push(Line);
    }

    public drawPiece(x, y) {
        let idx = Math.floor(Math.random() * (this._available.length));

        return new this._available[idx](x, y);
    }
}