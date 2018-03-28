import { Component, OnInit, ChangeDetectionStrategy, ViewContainerRef, NgZone, AfterViewChecked } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp3Component implements OnInit, AfterViewChecked {

  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}

  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }

  ngOnInit() {
  }

}
