import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, AfterViewChecked, ViewContainerRef, NgZone } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp1Component implements OnInit, AfterViewChecked {

  constructor(private checkEventService: CheckEventService, private viewContainerRef: ViewContainerRef, private zone: NgZone) { }

  ngAfterViewChecked(): void {
    console.log('cmp1');
    this.checkEventService.checkEvent(this.viewContainerRef, this.zone, '');
  }

  ngOnInit() {
  }
}
