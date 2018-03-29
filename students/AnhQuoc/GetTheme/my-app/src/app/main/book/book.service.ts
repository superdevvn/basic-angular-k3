import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class BookService {

    constructor(private apiService: ApiServiceService) {
    }

    getBooks() {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/getBooks`, {})
                .then(res => {
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    getBookByID(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getBook/${id}`)
                .then(res => {
                    resolve(res.json());
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


    saveBook(book) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/saveBook`, book)
                .then(res => {
                    resolve(res.json())
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    deleteBook(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteBook?id=${id}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

}
