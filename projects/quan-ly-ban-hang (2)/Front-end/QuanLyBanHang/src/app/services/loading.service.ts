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
    ></any>
    <div class="col-md-12 text-center" style="top: 65%"> 
    <button id="huy" class="btn btn-danger">Hủy</button> 
</div>
    `)
    $('#huy').click(function(){
      $('#globalloading').remove();
    })
  }
  stop(){
    $('#globalloading').remove();
  }
}
