import {Piece, PieceRotation, PieceTypes} from './Piece';


const MAPS = {};

MAPS[PieceRotation.DEG_0] = [
    [undefined,      undefined,      undefined,      undefined],
    [PieceTypes.Lr,  PieceTypes.Lr,  undefined,      undefined],
    [undefined,      PieceTypes.Lr,  undefined,      undefined],
    [undefined,      PieceTypes.Lr,  undefined,      undefined],
];

MAPS[PieceRotation.DEG_90] = [
    [undefined,       undefined,      undefined,       undefined],
    [undefined,       undefined,      undefined,       undefined],
    [undefined,       undefined,      PieceTypes.Lr,   undefined],
    [PieceTypes.Lr,   PieceTypes.Lr,  PieceTypes.Lr,   undefined],
];

MAPS[PieceRotation.DEG_180] = [
    [undefined,      undefined,      undefined,     undefined],
    [PieceTypes.Lr,  undefined,      undefined,     undefined],
    [PieceTypes.Lr,  undefined,      undefined,     undefined],
    [PieceTypes.Lr,  PieceTypes.Lr,  undefined,     undefined],
];

MAPS[PieceRotation.DEG_270] = [
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      undefined,      undefined,     undefined],
    [PieceTypes.Lr,  PieceTypes.Lr,  PieceTypes.Lr, undefined],
    [PieceTypes.Lr,  undefined ,     undefined,     undefined],
];

export class Lr extends Piece {
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
    }
}