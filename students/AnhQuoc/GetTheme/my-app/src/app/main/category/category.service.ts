import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class CategoryService {

    constructor(private apiService: ApiServiceService) {
    }

    getCategories() {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/getCategories`, {})
                .then(res => {
                    resolve(res.json())
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    getCategoryByID(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getCategory/${id}`)
                .then(res => {
                    resolve(res.json())
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    saveCategory(category) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/saveCategory`, category)
                .then(res => {
                    resolve(res.json())
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                })
        })
    }

    deleteRole(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteCategory?id=${id}`)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


}
