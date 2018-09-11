# ngx-tetris
***[work-in-progress]***

Tetris game as an angular component

***ngx-tetris*** is actually only the ***core of the game***... YOU need to add everything around it (controls, score...)  yourself :) 


Check the [here](http://chrum.it/pages/ngx-tetris)

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
    [moveLeft]="moveLeft"
    [moveRight]="moveRight"
    [rotate]="rotate"></tetris-core>

<button (mousedown)="moveLeft = true" (mouseup)="moveLeft = false">Left</button>
<button (mousedown)="moveRight = true" (mouseup)="moveRight = false">Right</button>
<button (mousedown)="rotate = true" (mouseup)="rotate = false">Rotate</button>
```

## Development

 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Authors

[Chrystian Ruminowicz](http://chrum.it)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
