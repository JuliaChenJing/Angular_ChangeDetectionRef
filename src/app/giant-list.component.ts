import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'giant-list',
    templateUrl: 'giant-list.component.html',
})
export class GiantList {

    dataProvider = [1, 2, 3, 4, 5];
    constructor(private ref: ChangeDetectorRef) {
        ref.detach();
        setInterval(() => {
            this.ref.detectChanges();
        }, 3000);
    }
}
