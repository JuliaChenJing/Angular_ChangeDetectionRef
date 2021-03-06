import { Component } from '@angular/core';
import { DataProvider } from './models/data-provider.model';

@Component({
    selector: 'app1',
    providers: [DataProvider],
    template: `
         Live Update: <input type="checkbox" [(ngModel)]="live">
         <live-data [live]="live"><live-data>
       `,
})
export class App1 {
    live = true;
}
