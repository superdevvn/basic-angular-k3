import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable()
export class LoadingService {

  constructor() { }
  start(image: string) {
    $('body').append(`<any id = "globalloading"
  style = "top:0;
          left: 0;
          height: 100vh;
          width: 100vw;
          position: fixed;
          opacity: 0.9;
          background: #ffffff;
          z-index: 99999;
          background-image: url(${image});
          background-position: center;
          background-repeat: no-repeat;"
          ></any>`);
  }

  stop() {
    $('#globalloading').remove();
  }

  startbtnloading() {
    $('.hlloginloading').append(`<img id="btnloading" width="25" style="margin-top: -20px; float: left;" src="../assets/images/gif/btnloadingblue.gif">`)
  }

  stopbtnloading() {
    $('#btnloading').remove();
  }
}
