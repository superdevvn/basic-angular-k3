import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class NotificationService {

    private notifier = swal;

    constructor() {
    }

    success(message: string) {
        swal({
            position: 'bottom-right',
            type: 'success',
            title: message,
            showConfirmButton: false,
            timer: 2000
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
                console.log(result);
                if (result.value) resolve();
                else reject();
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
