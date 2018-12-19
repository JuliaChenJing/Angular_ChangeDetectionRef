import { Component, ChangeDetectionStrategy, ViewContainerRef, NgZone, AfterViewChecked } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp3Component implements AfterViewChecked {

  constructor(private checkEventService: CheckEventService, private viewContainerRef: ViewContainerRef, private zone: NgZone) { }

  ngAfterViewChecked(): void {
    console.log('cmp3');
    this.checkEventService.checkEvent(this.viewContainerRef, this.zone, '');
  }

}
