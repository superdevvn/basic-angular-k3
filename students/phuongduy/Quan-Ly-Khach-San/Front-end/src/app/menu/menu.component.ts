import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Core:any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript(  "assets/AutoHintTheme/js/utility/utility.js", function( data, textStatus, jqxhr ) {
      $.getScript( "assets/AutoHintTheme/js/demo/demo.js", function( data, textStatus, jqxhr ) {
        $.getScript( "assets/AutoHintTheme/js/main.js", function( data, textStatus, jqxhr ) {
          Core.init();
        });
      });
    });
  }
}
