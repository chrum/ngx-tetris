import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';
import {GridSize, PieceMaps} from '../definitions';


const MAPS: PieceMaps = [];

MAPS[PieceRotation.DEG_0] = [
    [undefined,     undefined,      undefined,      undefined],
    [PieceTypes.S,  undefined,      undefined,      undefined],
    [PieceTypes.S,  PieceTypes.S,   undefined,      undefined],
    [undefined,     PieceTypes.S,   undefined,      undefined],
];

MAPS[PieceRotation.DEG_90] = [
    [undefined,     undefined,      undefined,      undefined],
    [undefined,     undefined,      undefined,      undefined],
    [undefined,     PieceTypes.S,   PieceTypes.S,   undefined],
    [PieceTypes.S,  PieceTypes.S,   undefined,      undefined],
];

export class S extends Piece {
    constructor(x: number, y: number, gridSize: GridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['S'];
    }
}
