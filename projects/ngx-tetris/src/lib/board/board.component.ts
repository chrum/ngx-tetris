import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {GameManagerService, Tile} from '../services/game-manager.service';
import {TileComponent} from "../tile/tile.component";

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})
export class BoardComponent {
    @Input() grid: Array<Tile>;
    @ViewChild(TileComponent) tile: TileComponent;
    public boardWidth: number;

    constructor(
      private _manager: GameManagerService,
      private _elRef: ElementRef
    ) {

    }

    ngAfterViewInit() {
        if (this._manager.settings.tileSize) {
            const bb = this.tile.el.nativeElement.getBoundingClientRect();
            const TILE_MARGIN = 1; //px
            const oneTileSpace = bb.width + 2 * TILE_MARGIN;
            const boardWidth = oneTileSpace * this._manager.elementsInRow;

            this._elRef.nativeElement.style['width'] = boardWidth + 'px';
        }
    }
}
