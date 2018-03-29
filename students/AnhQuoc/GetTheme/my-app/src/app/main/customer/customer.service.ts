import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class CustomerService {

    constructor(private apiService: ApiServiceService) {

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
                    reject(err);
                });
        });
    }

}
