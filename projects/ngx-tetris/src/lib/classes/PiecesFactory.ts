import {Dot} from './Dot';
import {Box} from './Box';
import {Line} from './Line';
import {T} from './T';
import {Z} from './Z';
import {S} from './S';
import {L} from './L';
import {Lr} from './Lr';
import {Piece} from './Piece';
import {GridSize} from '../definitions';

export class PiecesFactory {
    private _available: Array<Piece> = [];

    constructor(private _gridSize: GridSize) {
        // @ts-ignore
        this._available.push(Dot);
        // @ts-ignore
        this._available.push(Box);
        // @ts-ignore
        this._available.push(Line);
        // @ts-ignore
        this._available.push(T);
        // @ts-ignore
        this._available.push(Z);
        // @ts-ignore
        this._available.push(S);
        // @ts-ignore
        this._available.push(L);
        // @ts-ignore
        this._available.push(Lr);
    }

    public getRandomPiecePiece(x: number, y: number) {
        const idx = Math.floor(Math.random() * (this._available.length));

        // @ts-ignore
        return new this._available[idx](x, y, this._gridSize);
        // return new this._available[2](x, y, this._gridSize);
    }
}
