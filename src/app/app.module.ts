import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
// import {TetrisCoreModule} from '../../project/tetris-core/src/tetris-core.module';
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
