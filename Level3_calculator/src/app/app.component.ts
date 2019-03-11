import { Component } from '@angular/core';
import { KEYLIST } from './key';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  keylist = KEYLIST;
}
