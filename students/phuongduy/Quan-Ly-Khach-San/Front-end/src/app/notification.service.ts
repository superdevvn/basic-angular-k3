import { Injectable } from '@angular/core';
declare var $: any;
@Injectable()
export class NotificationService {

  constructor() { }

  success(message: string) {
    $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="position: fixed;
    top: 20px;
    right: 20px;
    z-index: 99999;
    display: none;
    "><i class="fa fa-check"></i> ${message} </div>`);
    $('#notificationSuccess').fadeToggle('slow');
    setTimeout(() => {
      $('#notificationSuccess').fadeToggle(5000);
      setTimeout(() => {
        $('#notificationSuccess').remove();
      }, 4000);
    }, 3000);
   
  }

  error(message: string) {
    $('body').append(`<div class="alert alert-success" id="notificationSuccess" style="position: fixed;
    top: 20px;
    right: 20px;
    z-index: 99999;
    display: none;
    "><i class="fa fa-check"></i> ${message} </div>`);
    $('#notificationSuccess').fadeIn('slow');
    setTimeout(() => {
      $('#notificationSuccess').fadeOut(2500);
      setTimeout(() => {
        $('#notificationSuccess').remove();
      }, 1000);
    }, 3000);
  }
}
