import { verticalMenuComponent } from './verticalmenu/verticalmenu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {sidemenuComponent} from './sidemenu/sidemenu.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    sidemenuComponent,
  verticalMenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
