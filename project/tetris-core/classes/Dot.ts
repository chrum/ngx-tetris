import {Piece, PieceRotation, PieceTypes} from './Piece';

const MAPS = [];
MAPS[PieceRotation.DEG_0] = [
    [undefined,        undefined,    undefined,    undefined],
    [undefined,        undefined,    undefined,    undefined],
    [undefined,        undefined,    undefined,    undefined],
    [PieceTypes.Dot,   undefined,    undefined,    undefined],
];

export class Dot extends Piece {
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
    }
}