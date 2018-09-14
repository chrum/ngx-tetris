import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tile} from '../services/game-manager.service';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line
    host: {
        '[style.background]': 'data.color'
    }
})
export class TileComponent {
    @Input() data: Tile;
}
