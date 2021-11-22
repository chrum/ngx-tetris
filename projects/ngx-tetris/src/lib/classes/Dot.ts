import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';
import {GridSize, PieceMaps} from '../definitions';

const MAPS: PieceMaps = [];
MAPS[PieceRotation.DEG_0] = [
    [undefined,        undefined,    undefined,    undefined],
    [undefined,        undefined,    undefined,    undefined],
    [undefined,        undefined,    undefined,    undefined],
    [PieceTypes.Box,   undefined,    undefined,    undefined],
];

export class Dot extends Piece {
    constructor(x: number, y: number, gridSize: GridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['Dot'];
    }
}
