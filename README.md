# ngx-tetris
***[work-in-progress]***

Tetris game as an angular component

***ngx-tetris*** is actually only the ***core of the game***... YOU need to add everything around it (controls, score...)  yourself :) 


Check the demo [here](http://chrum.it/pages/ngx-tetris)

## Using it:
#### Install:
```bash
npm install ngx-tetris
```

#### Import
```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        TetrisCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

#### Add/Connect to your fancy control interface
```html
    <tetris-core
        [start]="start"
        [stop]="stop"
        [moveLeft]="moveLeft"
        [moveRight]="moveRight"
        (lineCleared)="onLineCleared()"></tetris-core>

    <button (mousedown)="start = true" (mouseup)="start = false">Start</button>
    <button (mousedown)="stop = true" (mouseup)="stop = false">Stop</button>
    <button (mousedown)="moveLeft = true" (mouseup)="moveLeft = false">Left</button>
    <button (mousedown)="moveRight = true" (mouseup)="moveRight = false">Right</button>
```

#### Inputs

Name  | Default | Type | Description
--- | --- | --- | ---
initialSpeed | 500 | integer | Miliseconds (ms) time between falling cycles (lower number -> faster game)
start | | boolean | Flag that toggled from false to true starts the game
stop | | boolean | Flag that toggled from false to true stops the game
reset | | boolean | Flag that toggled from false to true resets the game
moveLeft | | boolean | Flag that toggled from false to true moves current piece to the left
moveRight | | boolean | Flag that toggled from false to true moves current piece to the right
moveDown | | boolean | Flag that toggled from false to true moves piece down (falls faster)
rotate | | boolean | Flag that toggled from false to true rotates current piece

#### Outputs

Name  | Description
--- | ---
lineCleared | Called whenever a line was completely filled and got cleared 
gameOver | :( player was flooded with pieces and didn't make it (remember about reset button)

#### Public methods
- `actionStart` 
- `actionStop` 
- `actionReset` 
- `actionLeft` 
- `actionDown` 
- `actionRight` 
- `actionRotate` 

which can be used like:
```html
<button (click)="onRotateButtonPressed()">Rotate</button>
```
```typescript
...
export class TetrisContainingComponent {
    @ViewChild(TetrisCoreComponent)
    private _tetris: TetrisCoreComponent;

    public onRotateButtonPressed() {
        this._tetris.actionRotate();
    }
}
```
OR
```html
<tetris-core #game>
    </tetris-core>
<button (click)="game.actionRotate()">Rotate</button>
```
## Development

 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Authors

[Chrystian Ruminowicz](http://chrum.it)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
