import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";
import { NotificationService } from '../../service/notification.service';

@Injectable()
export class CustomerService {

    constructor(private apiService: ApiServiceService,
    private notificationService: NotificationService) {

    }

    getCustomers() {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/getCustomers`, {})
                .then(res => {
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    getCustomer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getCustomer/${id}`)
                .then(res => {
                    resolve(res.json());

                }).catch(err => {
                reject(err);
            })
        })
    }

    saveCustomer(customer) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/saveCustomer`, customer)
                .then(res => {
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    deleteCustomer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteCustomer?id=${id}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    if(err.json().Message) this.notificationService.error(err.json().Message);
                    reject(err.json());
                });
        });
    }

}
