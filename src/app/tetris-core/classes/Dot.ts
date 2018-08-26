import {Piece, PieceTypes} from './Piece';

export class Dot extends Piece {
    color: string = 'black';
    constructor(x, y) {
        super(x, y);
        this.map[3][0] = PieceTypes.Dot;
    }
}