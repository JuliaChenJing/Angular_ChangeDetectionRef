import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      // require view to be updated
      // both is fine here
      this.ref.markForCheck(); // 1 know it is a change
      // this.ref.detectChanges(); // 2 detect if there is a change
    }, 1000);
  }
}
