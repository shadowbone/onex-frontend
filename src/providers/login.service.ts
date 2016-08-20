import { Injectable,Inject }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import {Router} from "@angular/router";

import {Observable, Observer, Subject} from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService
{
	constructor(
		private http : Http,
		@Inject('global') private global : any,
		private route : Router
		)
	{

	}
	getData()
	{
		// let jwt = this.global.token;
		let jwt = localStorage.getItem('id_token');
		let authHeader = new Headers();
		if(jwt) {
    		authHeader.append('Authorization', 'Bearer ' + jwt);
  		}
		return this.http.get(this.global.apiUrl + 'ahay', {headers: authHeader});
	}

	postData(data)
	{
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');
	    headers.append('Content-Type', 'application/json');
	    return this.http
	               .post(this.global.apiUrl + 'auth/login', data, {headers: headers});
	}

	logout(){
		localStorage.clear();
		this.route.navigate(['/signin']);
	}

	isAuth() : Observable<boolean> {
		var subject = new Subject<boolean>();
		var jwt = localStorage.getItem('id_token');
		console.log(jwt);
		console.log('Akhir');
		if(jwt == null){
					console.log('token kosong');
			subject.next(false);
		} else{
			let authHeader = new Headers();
			authHeader.append('Authorization', 'Bearer ' + jwt);
			this.http.get(this.global.apiUrl + 'ahay',{headers : authHeader})
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
