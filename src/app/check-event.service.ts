import { Injectable, NgZone, ViewContainerRef } from '@angular/core';

@Injectable()
export class CheckEventService {
  constructor() { }

  checkEvent(vr: ViewContainerRef, zone: NgZone, className: string = 'checked') {
    const a = vr.element.nativeElement.querySelector('a');
    console.log(a.style.backgroundColor = 'red');

    zone.runOutsideAngular(() => {
      setTimeout(() => {
        a.style.backgroundColor = 'yellow';
      }, 2000);
    });
  }
}
