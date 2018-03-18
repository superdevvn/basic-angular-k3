import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1',
  template: `<h2 style="red: blue">This is template page 1</h2>`
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}