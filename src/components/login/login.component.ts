import { Component , Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { LoginService } from '../../providers/login.service';
 
@Component({
  	selector: 'login',
  	templateUrl : './src/components/login/index.html',
  	providers : [ LoginService ]
})

export class LoginComponent
{ 	
	private data;
	private status : Boolean = false;
	private apiUrl : string;
	private title : string;
	private token : string;
	private model;

	constructor(private loginService : LoginService)
	{
		this.title = 'OnEx';
		this.apiUrl = 'http://localhost/api.onex/auth/login';
		this.model = {
			email : '',
			password : ''
		};
	}

	OnInit(){

	}

  	getData()
  	{
  		return this.loginService.getData(this.apiUrl)
  				.map(response => response.json()).
  				subscribe(
  					data => this.data = data,
        			error => console.error('Error: ' + error),
        			() => console.log('Completed!')
  				);
  	}

  	saveJwt(jwt) {
	    if(jwt) {
	      localStorage.setItem('id_token', jwt)
	    }
  	}

	postLogin()
	{		
		let dataPost = JSON.stringify({
			email: this.model.email,
			password: this.model. password
		});
		return this.loginService
			.postData(this.apiUrl, dataPost)
			.subscribe(
		        data => {
		          this.saveJwt(data.json().token);
		          this.model.email = null;
		          this.model.password = null;
		        },
		        err => this.logError(err.json().message),
		        () => console.log('Authentication Complete')
     	 	);
	}

	logError(err) {
    	console.error('There was an error: ' + err);
  	}

}
