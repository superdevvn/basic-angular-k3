import {Injectable} from '@angular/core';
declare var $ :any

@Injectable()
export class LoadingService {

    constructor() {
    }

    start() {
        $('.demo-preloader').show();
    }

    stop(){
        $('.demo-preloader').hide();
    }

}
