import { Injectable }    from '@angular/core';
import { Headers, Http , Response ,RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService 
{	

	private __token : string;
	constructor(public http : Http) 
	{
		this.__token = localStorage.getItem('id_token');
	}

	getData(url : string = null)
	{
		let jwt = localStorage.getItem('id_token');
		console.log(jwt);
		let authHeader = new Headers();
		if(jwt) {
    		authHeader.append('Authorization', 'Bearer ' + jwt);     
  		}	

		return this.http.get('http://localhost/api.onex/ahay', {headers: authHeader});
	}

	postData(url,data)
	{
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');
	    headers.append('Content-Type', 'application/json');
	    return this.http
	               .post(url, data, {headers: headers});
	}

	putData()
	{

	}

	deleteData()
	{

	}

	private handleError(error: any) {
	    console.error('An error occurred', error);
	    return Promise.reject(error.message || error);
  	}	
}