import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { Cmp4Component } from './cmp4/cmp4.component';
import { Cmp5Component } from './cmp5/cmp5.component';
import { Cmp6Component } from './cmp6/cmp6.component';
import { Cmp7Component } from './cmp7/cmp7.component';
import { CheckEventService } from './check-event.service';
import { TogleEventComponent } from './togle-event/togle-event.component';
import { TreeComponent } from './tree/tree.component';
import { TogleEventService } from './togle-event.service';


@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    Cmp4Component,
    Cmp5Component,
    Cmp6Component,
    Cmp7Component,
    TogleEventComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CheckEventService, TogleEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
