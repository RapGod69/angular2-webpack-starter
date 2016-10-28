import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { Dude } from '../Models/dude.service';

@Component({
    selector: 'gayDude',
    templateUrl: './gayDude.component.html',
    styleUrls: ['./gayDude.component.css'],
    providers: [Dude]
})
export class GayDudeComponent {

}