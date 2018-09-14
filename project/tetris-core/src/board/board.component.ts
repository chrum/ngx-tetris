import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tile} from '../services/game-manager.service';

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})
export class BoardComponent {
    @Input() grid: Array<Tile>;
}
