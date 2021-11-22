import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {HotkeyModule} from 'angular2-hotkeys';

import {AppComponent} from './app.component';
// import {TetrisCoreModule} from '../../../ngx-tetris/src/public-api';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        // HotkeyModule.forRoot(),
        TetrisCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
