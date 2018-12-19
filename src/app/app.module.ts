import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { App1 } from './app1.component';
import { GiantList } from './giant-list.component';
import { LiveData } from './live-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, App1, GiantList, LiveData
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
