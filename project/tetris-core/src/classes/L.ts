import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';


const MAPS = {};

MAPS[PieceRotation.DEG_0] = [
    [undefined,      undefined,      undefined,   undefined],
    [PieceTypes.L,   undefined,      undefined,   undefined],
    [PieceTypes.L,   undefined,      undefined,   undefined],
    [PieceTypes.L,   PieceTypes.L,   undefined,   undefined],
];

MAPS[PieceRotation.DEG_90] = [
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      undefined,      undefined,     undefined],
    [PieceTypes.L,   PieceTypes.L,   PieceTypes.L,  undefined],
    [PieceTypes.L,   undefined,      undefined,     undefined],
];

MAPS[PieceRotation.DEG_180] = [
    [undefined,      undefined,      undefined,     undefined],
    [PieceTypes.L,   PieceTypes.L,   undefined,     undefined],
    [undefined,      PieceTypes.L,   undefined,     undefined],
    [undefined,      PieceTypes.L,   undefined,     undefined],
];

MAPS[PieceRotation.DEG_270] = [
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      undefined,      PieceTypes.L,  undefined],
    [PieceTypes.L,   PieceTypes.L,   PieceTypes.L,  undefined],
];

export class L extends Piece {
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['L'];
    }
}
