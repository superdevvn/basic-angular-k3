// import { Injectable } from '@angular/core';
// import * as $ from 'jquery';
// @Injectable()
// export class NotifyService {

//   constructor() { }
//   success(message: string) {
//     $('body').append(`<div class="alert alert-success" 
//     id = "notificationSuccess"
//     style = "position: fixed;
//     top: 20px;
//     right: 20px;
//     z-index: 999999;
//     display: none;
//     "> <strong>Report:</strong> ${message}</div>`);
//     $('#notificationSuccess').slideDown('slow');
//     setTimeout(() => {
//       $('#notificationSuccess').slideUp(1000);
//       setTimeout(() => {
//         $('#notificationSuccess').remove();
//       }, 1000)
//     }, 5000);
//   }

//   error(message: string) {
//     $('body').append(`<div class="alert alert-danger" 
//     id = "notificationSuccess"
//     style = "position: fixed;
//     top: 20px;
//     right: 20px;
//     z-index: 999999;
//     display: none;
//     "> <strong>Report:</strong> ${message}</div>`);
//     $('#notificationSuccess').slideDown('slow');
//     setTimeout(() => {
//       $('#notificationSuccess').slideUp(1000);
//       setTimeout(() => {
//         $('#notificationSuccess').remove();
//       }, 1000)
//     }, 5000);
//   }
// }

import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class NotifyService {

<<<<<<< HEAD
    private notifier = swal;

    constructor() {
    }

    success(message: string) {
        swal({
            position: 'bottom-right',
            type: 'success',
            title: message,
            showConfirmButton: false,
            confirmButtonText: "Dong y",
        });
    }

    error(message: string) {
        swal({
            position: 'bottom-right',
            type: 'error',
            title: message,
            showConfirmButton: false,
            timer: 2000
        });
    }

    confirm(message: string) {
        return new Promise((resolve, reject) => {
            swal({
                title: 'Comfirm',
                text: message,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.value) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }

    printDeleteSuccess() {
        swal({
            position: 'bottom-right',
            type: 'success',
            title: 'Delete Successfully!',
            showConfirmButton: false,
            timer: 2000
        })
    }

    printEditSuccess() {
        swal({
            position: 'bottom-right',
            type: 'success',
            title: 'Edit Successfully!',
            showConfirmButton: false,
            timer: 2000
        })
    }

    printCreateSuccess() {
        swal({
            position: 'bottom-right',
            type: 'success',
            title: 'Create Successfully!',
            showConfirmButton: false,
            timer: 2000
        })
    }



=======
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
>>>>>>> d5c891c60fca61f77385c4f78ea06d6599fad69a

}
