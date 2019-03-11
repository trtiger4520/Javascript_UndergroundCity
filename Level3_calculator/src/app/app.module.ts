import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HelperComponent } from './helper/helper.component';
import { BacktoListComponent } from './backto-list/backto-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HelperComponent,
    BacktoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
