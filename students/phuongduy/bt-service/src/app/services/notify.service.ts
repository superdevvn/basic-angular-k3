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




}
