import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable()
export class NotifyService {

  constructor() { }
  success(message: string) {
    $('body').append(`<div
              class="alert alert-success"
              id="notificationsSuccess"
              style="position: fixed;
              bottom: 10px;
              right:0px;
              font-size: 1.5em;
              z-index:999999;
              display: none;">
              <i class="fa fa-check"></i>
              ${message}</div>`);
    $('#notificationsSuccess').slideDown('fast');
    setTimeout(() => {
      $('#notificationsSuccess').slideUp('medium');
      setTimeout(() => {
        $('#notificationsSuccess').remove();
      }, 1000);
    }, 3000);
  };

  error(message: string) {
    $('body').append(`<div
              class="alert alert-danger"
              id="notificationsError"
              style="position: fixed;
              bottom: 10px;
              right:0px;
              font-size: 1.5em;
              z-index:999999;
              display: none;">
              <i class="fa fa-times"></i>
              ${message}</div>`);
    $('#notificationsError').slideDown('fast');
    setTimeout(() => {
      $('#notificationsError').slideUp('medium');
      setTimeout(() => {
        $('#notificationsError').remove();
      }, 1000);
    }, 3000);
  };

  confirm(title: string, message: string) {
    if (!$('#confirmModal').length) {
      $('body').append(`
    <div id="confirmModal" class="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" id="closebtn" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">${title}</h4>
          </div>
          <div class="modal-body">
            <p>${message}</p>
          </div>
          <div class="modal-footer">
          <button type="button" id="nobtn" class="btn btn-default" data-dismiss="modal">No</button>
            <button type="button" id="yesbtn" class="btn btn-primary" data-dismiss="modal">Yes</button>
          </div>
        </div>
      </div>
    </div>`);
    }
    return new Promise((resolve, reject) => {
      $('#confirmModal').fadeIn('fast');
      $('#yesbtn').click(() => {
        resolve();
        $('#confirmModal').fadeOut('fast');
        $('#yesbtn').off('click');
        $('#nobtn').off('click');
      });
      $('#nobtn').click(() => {
        reject();
        $('#confirmModal').fadeOut('fast');
        $('#yesbtn').off('click');
        $('#nobtn').off('click');
      });
      $('#closebtn').click(() => {
        $('#confirmModal').fadeOut('fast');
        $('#yesbtn').off('click');
        $('#nobtn').off('click');
      });
    });
  }
}
