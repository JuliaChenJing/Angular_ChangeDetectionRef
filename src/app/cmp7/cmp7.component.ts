import { Component, OnInit, ChangeDetectionStrategy, AfterViewChecked, ViewContainerRef, NgZone } from '@angular/core';
import { CheckEventService } from '../check-event.service';

@Component({
  selector: 'app-cmp7',
  templateUrl: './cmp7.component.html',
  styleUrls: ['./cmp7.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp7Component implements OnInit, AfterViewChecked {

  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone) {}

  ngAfterViewChecked(): void {
    console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }

  ngOnInit() {
  }

}
