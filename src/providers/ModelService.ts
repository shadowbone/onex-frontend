import { Injectable,Inject }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { global }  from './GlobalService';

@Injectable()
export class ModelService {
	token = localStorage.getItem('id_token');
	constructor(
		private http : Http
		)
	{

	}

	data(url)
	{

	}

	post(url,data)
	{
		let authHeader = new Headers();
		authHeader.append('Content-Type', 'application/x-www-form-urlencoded');
	    authHeader.append('Content-Type', 'application/json');
	    authHeader.append('Authorization', 'Bearer ' + this.token);
		return this.http.put(global.apiUrl + url, data,{headers : this.authHeader});
	}

	delete(url,key)
	{
		// this.http.delete();
	}

	create(url,data)
	{
		let authHeader = new Headers();
		authHeader.append('Content-Type', 'application/x-www-form-urlencoded');
	    authHeader.append('Content-Type', 'application/json');
	    authHeader.append('Authorization', 'Bearer ' + this.token);
	    return this.http.post(global.apiUrl + url,data,{headers : authHeader}).map(response => response.json());
	}
}