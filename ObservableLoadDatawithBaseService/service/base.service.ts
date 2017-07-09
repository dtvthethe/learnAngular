import { Injectable } from "@angular/core"
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
const httpOptions: any = { withCredentials: true };


@Injectable()
export class BaseService {
	headers = new Headers();
	options = new RequestOptions();
	constructor(private http: Http) {
		this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new RequestOptions({ headers: this.headers });
	}
	

	public get<T>(url: string): Observable<T> {
		return this.http.get(url).map((response: Response) => {
			if (response.text() === "") {
				return null as T;
			}
			return response.json() as T;
		}).catch((error: any) => {
			if (error.status === 302 || error.status === "302") {
				// Redirecting resposne
			}
			else {
				return Observable.throw(new Error(error));
			}
		});
	}

	public post(url: string, data: any ): Observable<any> {
		return this.http.post(url, data,this.options).map((response: Response) => { return response.json(); }).catch((error: any) => {
			if (error.status === 302 || error.status === "302") {
				// Redirecting resposne
			}
			else {
				return Observable.throw(new Error(error));
			}
		});
	}
}


