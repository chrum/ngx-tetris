import { Component, Input, ViewChild } from '@angular/core';
import {GameManagerService, Tile} from '../services/game-manager.service';
import {TileComponent} from "../tile/tile.component";

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    host: {
        '[style.width]': 'boardWidth + "px"',
    }
})
export class BoardComponent {
    @Input() grid: Array<Tile>;
    @ViewChild(TileComponent) tile;
    public boardWidth = null;

    constructor(private _manager: GameManagerService) {

    }

    ngAfterViewInit() {
        if (this._manager.settings.tileSize) {
            const bb = this.tile.el.nativeElement.getBoundingClientRect();
            const TILE_MARGIN = 1; //px
            const oneTileSpace = bb.width + 2 * TILE_MARGIN;
            this.boardWidth = oneTileSpace * this._manager.elementsInRow;

        }
    }
}
