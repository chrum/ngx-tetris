export enum PieceRotation {
    DEG_0 = 0,
    DEG_90 = 1,
    DEG_180 = 2,
    DEG_270 = 3
}

export enum PieceColors {
    Box = 'red',
    Dot = 'black',
    Line = 'blue',
    T = 'pink'
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

    private _maps: {};
    public map: Array<Array<number>> = [
        [], []
    ];

    private _gridSize;

    constructor(x, y, gridSize, maps) {
        this.color = PieceColors[this.constructor.name];
        this._gridSize = gridSize;
        this.x = x;
        this.y = y;
        this._maps = maps;

        this.map = this._maps[this.rotation];
    }

    public getPositionsOnGrid(from = 'top', xOffset = 0, yOffset = 0) {
        let acc = [];
        if (from === 'top') {
            for(let row = 0; row < 4; row++) {
                for(let col = 0; col < 4; col++) {
                    let pos = this._calculatePosition(row, col, this._gridSize.width, xOffset, yOffset, acc);
                }
            }
        } else if (from === 'bottom') {
            for(let row = 3; row >= 0; row--) {
                for(let col = 0; col < 4; col++) {
                    let pos = this._calculatePosition(row, col, this._gridSize.width, xOffset, yOffset, acc);
                }
            }
        } else if (from === 'left') {
            for(let col = 0; col < 4; col++) {
                for(let row = 3; row >= 0; row--) {
                    let pos = this._calculatePosition(row, col, this._gridSize.width, xOffset, yOffset, acc);
                }
            }
        } else if (from === 'right') {
            for(let col = 3; col >= 0; col--) {
                for(let row = 3; row >= 0; row--) {
                    let pos = this._calculatePosition(row, col, this._gridSize.width, xOffset, yOffset, acc);
                }
            }
        }

        return acc;
    }

    private _calculatePosition(row, col, gridWidth, xOffset, yOffset, acc) {
        if (this.map[row][col]) {
            let pos = (this.y + row + yOffset) * gridWidth + this.x + col + xOffset;
            if (pos > 0) {
                acc.push(pos);
            }
        }
    }

    public rotate() {
        let keys = Object.keys(this._maps);
        let idx = keys.indexOf(this.rotation.toString());
        if (idx >= keys.length - 1) {
            this.rotation = keys[0] as any;
        } else {
            this.rotation = keys[++idx] as any;
        }

        this.map = this._maps[this.rotation];
    }

    public moveDown(){
        this.y++;
    }

    public moveRight(){
        this.x++;
    }

    public moveLeft(){
        this.x--;
    }

    get bottomRow() {
        return this.y + 3;
    }

    get rightCol() {
        let col = 3;
        while(col >= 0) {
            for(let row = 0; row <= 3; row++) {
                if (this.map[row][col]) {
                    return this.x + col;
                }
            }
            col--;
        }

    }

    get leftCol() {
        return this.x;
    }
}