import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TreeComponent implements OnInit {
  @Input()
  notifier: Subject<any>;

  constructor() { }

  ngOnInit() {
  }

}
