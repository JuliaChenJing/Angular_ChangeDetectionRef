import { Component, OnInit, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { TogleEventService } from '../togle-event.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-togle-event',
  templateUrl: './togle-event.component.html',
  styleUrls: ['./togle-event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TogleEventComponent implements OnInit {
  @Input() notifier: Subject<any>;


  constructor(private togleEventService: TogleEventService) { }

  ngOnInit() {
  }

  onCheck() {
    this.notifier.next('markForCheck');
  }

}
