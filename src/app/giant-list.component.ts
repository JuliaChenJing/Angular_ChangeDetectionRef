import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


class DataListProvider {
    // in a real application the returned data will be different every time
    get data() { return [1, 2, 3, 4, 5]; }
}

@Component({
    selector: 'giant-list',
    template: `
        <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
      `,
})
class GiantList {
    constructor(private ref: ChangeDetectorRef, private dataProvider: DataListProvider) {
        ref.detach();
        setInterval(() => { this.ref.detectChanges(); }, 5000);
    }
}