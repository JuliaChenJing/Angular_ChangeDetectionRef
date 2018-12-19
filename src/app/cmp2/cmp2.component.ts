import {
  Component, OnInit, ChangeDetectionStrategy, ViewContainerRef
  , AfterViewChecked, NgZone, Input, ChangeDetectorRef
} from '@angular/core';
import { CheckEventService } from '../check-event.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp2Component implements OnInit, AfterViewChecked {
  @Input() notifier: Subject<any>;

  constructor(
    private ch: CheckEventService,
    private viewContainerRef: ViewContainerRef,
    private zone: NgZone,
    private changeDetectionRef: ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
    this.ch.checkEvent(this.viewContainerRef, this.zone, '');
  }

  ngOnInit() {
    this.notifier.subscribe(val => {
      if (val === 'markForCheck') {
        this.changeDetectionRef.markForCheck();
      }
      console.log(`val : ${val}`);
    });
  }

}
