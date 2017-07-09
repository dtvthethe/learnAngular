import { Observable } from "rxjs/Observable";
import { BaseService } from "app/service/base.service";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeSerice {
        private url:string = "http://localhost:53396/api/Employee/";

    constructor(private baseService:BaseService){

    }

    getEmployees():Observable<any[]>{
        return this.baseService.get<any[]>(this.url+"GetEmployees");
    }
}