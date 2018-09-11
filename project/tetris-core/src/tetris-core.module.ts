import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TetrisCoreComponent} from './tetris-core.component';
import {BoardComponent} from './board/board.component';
import {GameManagerService} from './services/game-manager.service';
import {TileComponent} from './tile/tile.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TetrisCoreComponent,
        BoardComponent,
        TileComponent
    ],
    providers: [
        GameManagerService
    ],
    exports: [TetrisCoreComponent]
})
export class TetrisCoreModule {
}
