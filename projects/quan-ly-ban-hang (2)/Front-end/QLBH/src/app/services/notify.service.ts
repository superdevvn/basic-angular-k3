import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable()
export class NotifyService {

  constructor() { }
  success(message: string) {
    $('body').append(`<div class="alert alert-success" 
    id = "notificationSuccess"
    style = "position: fixed;
    top: 20px;
    right: 20px;
    z-index: 999999;
    display: none;
    "> <strong>Report:</strong> ${message}</div>`);
    $('#notificationSuccess').slideDown('slow');
    setTimeout(() => {
      $('#notificationSuccess').slideUp(1000);
      setTimeout(() => {
        $('#notificationSuccess').remove();
      }, 1000)
    }, 5000);
  }

  error(message: string) {
    $('body').append(`<div class="alert alert-danger" 
    id = "notificationSuccess"
    style = "position: fixed;
    top: 20px;
    right: 20px;
    z-index: 999999;
    display: none;
    "> <strong>Report:</strong> ${message}</div>`);
    $('#notificationSuccess').slideDown('slow');
    setTimeout(() => {
      $('#notificationSuccess').slideUp(1000);
      setTimeout(() => {
        $('#notificationSuccess').remove();
      }, 1000)
    }, 5000);
  }
}
