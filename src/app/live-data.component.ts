import { Component, ChangeDetectorRef } from '@angular/core';
import {DataProvider} from './models/data-provider.model';


@Component({
    selector: 'live-data',
    inputs: ['live'],
    template: 'Data: {{dataProvider.data}}'
})
export class LiveData {
    constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) { }

    set live(value: boolean) {
        if (value) {
            this.ref.reattach();
        } else {
            this.ref.detach();
        }
    }
}

