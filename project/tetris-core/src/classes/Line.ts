import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';

const MAPS = [];
MAPS[PieceRotation.DEG_0] = [
    [undefined,         undefined,         undefined,        undefined],
    [undefined,         undefined,         undefined,        undefined],
    [undefined,         undefined,         undefined,        undefined],
    [PieceTypes.Line,   PieceTypes.Line,   PieceTypes.Line,  PieceTypes.Line],
];

MAPS[PieceRotation.DEG_90] = [
    [PieceTypes.Line,   undefined,   undefined,  undefined],
    [PieceTypes.Line,   undefined,   undefined,  undefined],
    [PieceTypes.Line,   undefined,   undefined,  undefined],
    [PieceTypes.Line,   undefined,   undefined,  undefined],
];


export class Line extends Piece {
    constructor(x, y, gridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['Line'];
    }
}
