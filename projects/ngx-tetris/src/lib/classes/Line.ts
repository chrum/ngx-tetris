import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';
import {GridSize, PieceMaps} from '../definitions';

const MAPS: PieceMaps = [];
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
    constructor(x: number, y: number, gridSize: GridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['Line'];
    }
}
