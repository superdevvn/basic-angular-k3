import {Injectable} from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class NotificationService {

    private notifier = swal;

    constructor() {
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
