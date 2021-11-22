import {Piece, PieceColors, PieceRotation, PieceTypes} from './Piece';
import {GridSize, PieceMaps} from '../definitions';


const MAPS: PieceMaps = [];

MAPS[PieceRotation.DEG_0] = [
    [undefined,      undefined,      undefined,      undefined],
    [undefined,      undefined,      undefined,      undefined],
    [undefined,      PieceTypes.T,   undefined,      undefined],
    [PieceTypes.T,   PieceTypes.T,   PieceTypes.T,   undefined],
];

MAPS[PieceRotation.DEG_90] = [
    [undefined,      undefined,      undefined,   undefined],
    [PieceTypes.T,   undefined,      undefined,   undefined],
    [PieceTypes.T,   PieceTypes.T,   undefined,   undefined],
    [PieceTypes.T,   undefined,      undefined,   undefined],
];

MAPS[PieceRotation.DEG_180] = [
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      undefined,      undefined,     undefined],
    [PieceTypes.T,   PieceTypes.T,   PieceTypes.T,  undefined],
    [undefined,      PieceTypes.T,   undefined,     undefined],
];

MAPS[PieceRotation.DEG_270] = [
    [undefined,      undefined,      undefined,     undefined],
    [undefined,      PieceTypes.T,   undefined,     undefined],
    [PieceTypes.T,   PieceTypes.T,   undefined,     undefined],
    [undefined,      PieceTypes.T,   undefined,     undefined],
];

export class T extends Piece {
    constructor(x: number, y: number, gridSize: GridSize) {
        super(x, y, gridSize, MAPS);
        this.color = PieceColors['T'];
    }
}
