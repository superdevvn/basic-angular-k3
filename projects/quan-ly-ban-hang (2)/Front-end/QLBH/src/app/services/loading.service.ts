import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  constructor() { }
  start(){
    $('body').append(`<and id = "globalloading" 
    style = "top:0;
    left: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    opacity: 0.7;
    background: #fff;
    z-index: 99999;
    background-image: url(../assets/loading.gif);
    background-position: center;
    background-repeat: no-repeat;"
    ></any>`)
  }
  stop(){
    $('#globalloading').remove();
  }
}
