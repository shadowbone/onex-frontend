import { Injectable,Inject }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import {Router} from "@angular/router";
import {Observable, Observer, Subject} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import { global }  from './GlobalService';


@Injectable()
export class LoginService
{
	constructor(
		private http : Http,
		private route : Router
		)
	{

	}
	getData()
	{
		let jwt = global.token;
		let authHeader = new Headers();
		if(jwt) {
    		authHeader.append('Authorization', 'Bearer ' + jwt);
  		}
		return this.http.get(global.apiUrl + 'ahay', {headers: authHeader});
	}

	postData(url : string = '' , data : any)
	{
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');
	    headers.append('Content-Type', 'application/json');
	    return this.http
	               .post(global.apiUrl + url, data, {headers: headers});
	}

	logout(){
		localStorage.clear();
		this.route.navigate(['/login']);
	}

	isAuth() : Observable<boolean> {
		let subject = new Subject<boolean>();
		let jwt = localStorage.getItem('id_token');
		let url = 'ahay';
		if(jwt == null){
			subject.next(false);
		} else{
			let authHeader = new Headers();
			authHeader.append('Authorization', 'Bearer ' + jwt);
			this.http.get(global.apiUrl + url,{headers : authHeader})
			.map((res : Response) => res.json())
			.subscribe(res => {
				subject.next(true);
			},(res) => {
				subject.next(false);
			});
		}
 		return subject.asObservable().take(1);
	}

	private handleError(error: any) {
	    console.error('An error occurred', error);
	    return Promise.reject(error.message || error);
  	}
}
