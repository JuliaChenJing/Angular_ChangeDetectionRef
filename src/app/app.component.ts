import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  attachOrDetachNotifier: Subject<any> = new Subject();

  ngOnInit(): void {
    this.attachOrDetachNotifier.subscribe((val) => {
      console.log('--------------app.component.ts-----------------');
    });
  }
}
