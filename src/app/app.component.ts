import {Component, ViewChild} from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
// import {TetrisCoreComponent} from '../../project/tetris-core/src/tetris-core.component';
import {TetrisCoreComponent} from '../../project/tetris-core/dist';
// import {TetrisCoreComponent} from 'ngx-tetris';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild(TetrisCoreComponent)
    private _tetris: TetrisCoreComponent;

    public moveLeft: boolean = false;
    public moveDown: boolean = false;
    public moveRight: boolean = false;
    public rotate: boolean = false;
    public start: boolean = false;
    public stop: boolean = false;
    public reset: boolean = false;

    constructor(private _hotkeysService: HotkeysService) {
        this._addHotkeys();
    }

    public onLineCleared() {
        console.log('line cleared');
    }

    public onGameOver() {
        alert('game over');
    }

    private _addHotkeys() {
        this._hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
            this._tetris.actionRotate();
            return false; // Prevent bubbling
        }));

        this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
            this._tetris.actionLeft();
            return false; // Prevent bubbling
        }));

        this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
            this._tetris.actionDown();
            return false; // Prevent bubbling
        }));

        this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
            this._tetris.actionRight();
            return false; // Prevent bubbling
        }));
    }

    
}
