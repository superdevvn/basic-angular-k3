import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { reject } from 'q';
@Injectable()
export class NotifyService {

  constructor() { }
  succes(message: string) {
    $('body').append(`<div class = "alert alert-success"
    id = "notificationSuccess"
    style = "position:fixed;
    top:20px;
    right:20px;
    z-index:999999;
    display:none;
    "> <strong>Report:</strong> ${message} </div>`);
    $('#notificationSuccess').slideDown('slow');
    setTimeout(() => {
      $('#notificationSuccess').slideUp(1000);
      setTimeout(() => {
        $('#notificationSuccess').remove();
      }, 1000);

    }, 5000);
  }
  confirm(message: string){
    if(!$('#confirmModal').length){
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
              <button id="yesButton" type="button" class="btn btn-primary" data-dismiss="confirmModal">Yes</button>
              <button id="cancelButton" type="button" class="btn btn-default" data-dismiss="confirmModal">Cancel</button>
            </div>
          </div>
      
        </div>
      </div>`)
    }
    return new Promise((resolve, reject)=>{
      $('#confirmModal').fadeIn('fast');
      $('#yesButton').click(()=>{
        resolve();
        this.succes("yes");
        console.log('xxx');
        $('#confirmModal').fadeOut('fast');
        $('#yesButton').off('click');
        $('#cancelButton').off('click');
      });
      $('#cancelButton').click(()=>{
        reject();
        this.succes("cancel");
        $('#confirmModal').fadeOut('fast');
        $('#yesButton').off('click');
        $('#cancelButton').off('click');
        
      });
    })
  } 
}