import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';
declare var $: any;
@Injectable()
export class NotifyService {

  constructor() { }
  success(message: string) {
    $('body').append(`<div class="alert alert-success" id = "notificationSuccess"
  style = "position:fixed;
  top:20px;
  right:20px;
  z-index: 99999;
  display:none;"><string>Report:</strong> ${message}</div>
  `);
    $('#notificationSuccess').slideToggle('slow');
    setTimeout(() => {
      $('#notificationSuccess').slideUp(1000);
      setTimeout(() => {
        $('#notificationSuccess').remove();
      }, 1000)
    }, 5000);
  }
  confirm(message: string){
    if(!$('confirmModal').length){
      $('body').append(`<!-- Modal -->
      <div id="confirmModal" class="modal" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>${message}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>`);
    }
    return new Promise((resolve, reject)=>{
      $('#confirmModal').fadeIn('fast');
      $('#yesButton').click(()=>{
        resolve();
        console.log('zzz');
        $('#confirmModal').fadeOut('fast');
        $('#yesButton').off('click');
        $('#cancelButton').off('click');
      });
      $('#cancelButton').click(()=>{
        reject();
        $('#confirmModal').fadeOut('fast');
        $('#yesButton').off('click');
        $('#cancelButton').off('click');
      });
    });
  }
}
