import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = {
      strings: ["Good Intructor", "At SuperDev", "And also a senior developer", "Trần Thuận Nghĩa"],
      typeSpeed: 40
    };
    var typed = new Typed(".intructorName", options);
  }
}
