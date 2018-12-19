import { Component, ChangeDetectorRef } from '@angular/core';
import { DataListProvider } from './models/data-list-provider.model';

@Component({
    selector: 'giant-list',
    template: `
        <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
      `,
})
export class GiantList {
    constructor(private ref: ChangeDetectorRef, private dataProvider: DataListProvider) {
        ref.detach();
        setInterval(() => { this.ref.detectChanges(); }, 5000);
    }
}