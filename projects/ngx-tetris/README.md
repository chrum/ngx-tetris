# ngx-tetris

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
    <tetris-core #game
        (lineCleared)="onLineCleared()"></tetris-core>

        <button (click)="game.actionStart()">Start</button>
        <button (click)="game.actionStop()">Stop</button>
        <button (click)="game.actionReset()">Reset</button>
        <button (click)="game.actionRotate()">Rotate</button>
        <button (click)="game.actionLeft()">Left</button>
        <button (click)="game.actionRight()">Right</button>
        <button (click)="game.actionDown()">Down</button>
        <button (click)="game.actionDrop()">Drop</button>
```

#### Inputs

Name  | Default | Type | Description
--- | --- | --- | ---
tileSize | 25px | css unit | Size to use when rendering single tile. Can be in 'px' or in 'em' or any(probably) other css unit
initialSpeed | 500 | integer | Miliseconds (ms) time between falling cycles (lower number -> faster game)
start | | boolean | Flag that toggled from false to true starts the game
stop | | boolean | Flag that toggled from false to true stops the game
reset | | boolean | Flag that toggled from false to true resets the game
moveLeft | | boolean | Flag that toggled from false to true moves current piece to the left
moveRight | | boolean | Flag that toggled from false to true moves current piece to the right
moveDown | | boolean | Flag that toggled from false to true moves piece down (falls faster)
drop | | boolean | Flag that toggled from false to true moves piece down (instantly drops)
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
- `actionDrop`

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

### Styling

To change colors and tiles (to **black and white** for example) define styles with colors like
```scss
tetris-core {
    tile {
        background: white;
        &.color-box {
          background: #000000;
        }
    }
}
```
for full example (and all class names) [go here](https://github.com/chrum/ngx-tetris/blob/master/src/styles.scss)

## Development


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Authors

[Chrystian Ruminowicz](http://chrum.it)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
