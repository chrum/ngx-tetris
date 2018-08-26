import {Piece, PieceTypes} from './Piece';

export class Line extends Piece {
    color: string = 'blue';
    constructor(x, y) {
        super(x, y);

        this.map[3][0] = PieceTypes.Line;
        this.map[3][1] = PieceTypes.Line;
        this.map[3][2] = PieceTypes.Line;
        this.map[3][3] = PieceTypes.Line;
    }
}