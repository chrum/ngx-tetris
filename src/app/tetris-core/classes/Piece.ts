export enum Direction {
    Clockwise = 0,
    CounterClockwise = 1
}

enum PieceRotation {
    DEG_0 = 0,
    DEG_90 = 1,
    DEG_180 = 2,
    DEG_270 = 3
}

export enum PieceTypes {
    Dot = 1,
    Box = 2,
    Line = 3,
    T = 4,
    L = 5,
    Z = 6

}

export class Piece {
    color: string = 'red';
    x: number;
    y: number;
    rotation: PieceRotation = PieceRotation.DEG_0;

    public map: Array<Array<number>> = [
        [], []
    ];

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.map[0] = new Array(4);
        this.map[1] = new Array(4);
        this.map[2] = new Array(4);
        this.map[3] = new Array(4);
    }



    public rotate(direction: Direction) {

    }

    public moveDown(){
        this.y++;
    }

    get bottomRow() {
        return this.y + 3;
    }

    get rightCol() {
        return this.x + 3;
    }
}