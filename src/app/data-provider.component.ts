import { Component, ChangeDetectorRef } from '@angular/core';

export class DataProvider {
    data = 1;
    constructor() {
        setInterval(() => { this.data = 2; }, 500);
    }
}


@Component({
    selector: 'live-data',
    inputs: ['live'],
    template: 'Data: {{dataProvider.data}}'
})
class LiveData {
    constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) { }

    set live(value: boolean) {
        if (value) {
            this.ref.reattach();
        } else {
            this.ref.detach();
        }
    }
}

