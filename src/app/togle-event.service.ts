import { Injectable, NgZone, ChangeDetectorRef } from '@angular/core';

@Injectable()
export class TogleEventService {

  checked: boolean;

  setCheck(checked: boolean): any {
    this.checked = checked;
  }

  getCheck(): boolean {
    console.log(this.checked);
    return this.checked;
  }

  togleEvent(zone: NgZone, cdr: ChangeDetectorRef ) {
    zone.run(() => {
        cdr.markForCheck();
    });
  }

  constructor() { }

}
