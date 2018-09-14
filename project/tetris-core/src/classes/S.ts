import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';


const MAPS = {};

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
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['S'];
    }
}
