import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { Dude } from '../Models/dude.service';

@Component({
    selector: 'gay',
    styleUrls: [ './gay.component.css' ],
    templateUrl: './gay.component.html',
    providers: [Dude]
})
export class GayComponent {
    dudes: Dude[] = [];

    constructor() {
        
    }

    ngOnInit() {
        for( let i = 0; i < 10; i++  ) {
            let str = `Dude number ${i}`;
            this.dudes.push(new Dude(str, i*3));
        }
    }
}