import { Component
  , OnInit
  , ChangeDetectionStrategy
  , ViewEncapsulation
  , ViewContainerRef
  , AfterViewChecked, NgZone, Input, ChangeDetectorRef } from '@angular/core';
import { CheckEventService } from '../check-event.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cmp2Component implements OnInit, AfterViewChecked {
  @Input()
  notifier: Subject<any>;

  constructor(private ch: CheckEventService, private el: ViewContainerRef, private zone: NgZone, private cdr: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    // console.log('TEST');
    // this.msg = '변화감지!';
    this.ch.checkEvent(this.el, this.zone , '');
  }

  ngOnInit() {
    this.notifier.subscribe(val => {
      if (val === 'markForCheck') {
        // angular zone 내부에서 실행하면서 자신을 기준으로
        // 모든 상위의 변화 감지를 발생시킨다.
        // this.zone.run( () => this.cdr.markForCheck());
        this.cdr.markForCheck();
      }
      console.log(`val : ${val}`);

    });
  }

}
