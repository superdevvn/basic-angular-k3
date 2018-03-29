import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";

@Injectable()
export class RoleDetailService {
    constructor(private apiService: ApiService) { }
}