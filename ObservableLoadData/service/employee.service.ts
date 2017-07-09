import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";


@Injectable()
export class EmployeeSerice {
        private url:string = "http://localhost:53396/api/Employee/";

    constructor(private http:Http){

    }

    getEmployees():Observable<any[]>{
        return this.http.get(this.url+"GetEmployees").map(res => res.json());
    }
}