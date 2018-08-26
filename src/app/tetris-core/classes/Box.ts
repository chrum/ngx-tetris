import {Piece, PieceTypes} from './Piece';

export class Box extends Piece {
    color: string = 'red';
    constructor(x, y) {
        super(x, y);

        this.map[2][0] = PieceTypes.Box;
        this.map[2][1] = PieceTypes.Box;
        this.map[3][0] = PieceTypes.Box;
        this.map[3][1] = PieceTypes.Box;
    }
}