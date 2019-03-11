import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html'
})
export class HelperComponent implements OnInit {

  open = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOpen() {
    this.open = !this.open;
  }

}
