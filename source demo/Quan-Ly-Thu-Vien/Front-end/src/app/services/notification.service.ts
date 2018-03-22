import { Injectable } from '@angular/core';
declare var $:any;
@Injectable()
export class NotificationService{
    constructor () { }
    success (message: string) {
        $('body').append(`<div class = "alert alert-success" id = "notificationSuccess"
        style = "position:fixed;
        top:20px;
        right:20px;
        z-index: 999999;
        display:none;
        "> <strong>Report:</strong> ${message}</div>`);
        $('#notificationSuccess').slideToggle('slow');
        setTimeout(() => {
            $('#notificationSuccess').fadeOut(1000);
            setTimeout(()=>{
                $('notificationSuccess').remove();
            },1000)
        },5000);
    }
}
