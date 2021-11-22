import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import {GameManagerService, Tile} from '../services/game-manager.service';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line
    host: {
        '[style.width]': 'tileSize',
        '[style.height]': 'tileSize'
    }
})
export class TileComponent implements OnInit {
    @Input() data: Tile;
    public tileSize = null;

    constructor(
        public el: ElementRef,
        private _renderer: Renderer2,
        private _manager: GameManagerService
    ) {
        if (this._manager.settings.tileSize) {
            this.tileSize = this._manager.settings.tileSize
        }

    }

    ngOnInit() {
        if (this.data.color) {
            this._renderer.addClass(this.el.nativeElement, this.data.color);
        }

    }
}
