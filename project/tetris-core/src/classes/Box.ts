import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';

const MAPS = [];
MAPS[PieceRotation.DEG_0] = [
    [undefined,        undefined,         undefined,    undefined],
    [undefined,        undefined,         undefined,    undefined],
    [PieceTypes.Box,   PieceTypes.Box,    undefined,    undefined],
    [PieceTypes.Box,   PieceTypes.Box,    undefined,    undefined],
];


export class Box extends Piece {
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['Box'];
    }
}