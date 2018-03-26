import { Injectable, style } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class LoadingService {

  constructor() { }
  star() {
    $('body').append(`<any id = "golballoading"
    style = "top:0;
    left: 0;
    height:100vh;
    width:100vw;
    position:fixed;
    opacity:0.7;
    background: #ffffff;
    z-index: 99999;
    background-position:center;
    background-image: url(../assets/AutoHint/a.gif);
    background-repeat:no-repeat;"
    ></any>`)
    $('#golballoading').slideDown('slow');
    setTimeout(() => {
      $('#golballoading').slideUp(1000);
      setTimeout(() => {
        $('#golballoading').remove();
      }, 1000);

    }, 5000);
  }
  stop()
 {
   $('#loballoading').remove();
 }
}
