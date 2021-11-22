import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';
import {GridSize, PieceMaps} from '../definitions';


const MAPS: PieceMaps = [];

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
    constructor(x: number, y: number, gridSize: GridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['Z'];
    }
}

