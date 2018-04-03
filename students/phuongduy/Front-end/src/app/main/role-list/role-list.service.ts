import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";
import { NotificationService } from '../../service/notification.service';

@Injectable()
export class RoleListService {

    constructor(private apiService: ApiServiceService,
    private notificationService:NotificationService) {
    }

    getRoles() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getRoles', {})
                .then(res => {
                    console.log(res.json());
                    resolve(res.json());
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteRole?id=${id}`)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    if(err.json().Message) this.notificationService.error(err.json().Message);
                    reject(err.json());
                })
        });
    }

}
