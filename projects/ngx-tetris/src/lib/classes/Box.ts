import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';
import {GridSize, PieceMaps} from '../definitions';

const MAPS: PieceMaps = [];
MAPS[PieceRotation.DEG_0] = [
    [undefined,        undefined,         undefined,    undefined],
    [undefined,        undefined,         undefined,    undefined],
    [PieceTypes.Box,   PieceTypes.Box,    undefined,    undefined],
    [PieceTypes.Box,   PieceTypes.Box,    undefined,    undefined],
];


export class Box extends Piece {
    constructor(x: number, y: number, gridSize: GridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['Box'];
    }
}
