import {Piece, PieceRotation, PieceTypes} from './Piece';


const MAPS = {};

MAPS[PieceRotation.DEG_0] = [
    [undefined,      undefined,      undefined,   undefined],
    [undefined,      PieceTypes.Z,   undefined,   undefined],
    [PieceTypes.Z,   PieceTypes.Z,   undefined,   undefined],
    [PieceTypes.Z,   undefined,      undefined,   undefined],
];

MAPS[PieceRotation.DEG_90] = [
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      undefined,      undefined,     undefined],
    [PieceTypes.Z,   PieceTypes.Z,   undefined,     undefined],
    [undefined,      PieceTypes.Z,   PieceTypes.Z,  undefined],
];

export class Z extends Piece {
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
    }
}