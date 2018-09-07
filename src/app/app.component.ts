import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public moveLeft: boolean = false;
    public moveRight: boolean = false;
    public rotate: boolean = false;


}
