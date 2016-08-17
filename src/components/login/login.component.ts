import { Component,Directive } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../providers/login.service';
import { ENV } from '../../providers/GlobalService';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
  	selector: 'my-login',
  	templateUrl : 'index.html',
  	providers : [ LoginService ]
})

export class LoginComponent
{ 	
	hideElement: Boolean = false;
	private data;
	private status : Boolean = false;
	private apiUrl : string;
	private title : string;
	private token : string;
	private model;
	userForm: any;

	constructor(
		private loginService : LoginService,
		private router:Router,
		fb: FormBuilder
		)
	{
		this.userForm = fb.group({
	      email: ["", Validators.required],
	      password: ["", Validators.required]
	    });

		this.title = 'OnEx';
		this.model = {
			email : '',
			password : ''
		};
	}

  	getData()
  	{
  		return this.loginService.getData(ENV.apiUrl + 'ahay')
  				.map(response => response.json()).
  				subscribe(
  					data => this.data = data,
        			error => console.error('Error: ' + error),
        			() => console.log('Completed!')
  				);
  	}

  	saveJwt(jwt) {
	    if(jwt) {
	      localStorage.setItem('id_token', jwt);
	    }
  	}

  	auth(auth){
  		if(auth){
  			console.log(auth);
	      localStorage.setItem('auth', JSON.stringify(auth));
  		}
  	}
	postLogin()
	{		
		let dataPost = {
			email: this.model.email,
			password: this.model. password
		};
		return this.loginService
			.postData(ENV.apiUrl + 'auth/login', dataPost)
			.map(response => response.json())
			.subscribe(
		        data => {
		          this.saveJwt(data.token);
		          this.auth(data.data);
		          this.model.email = null;
		          this.model.password = null;
		          window.location.href = "http://localhost:6969/master/soal";
		        },
		        err => this.logError(err.json().message),
		        () => console.log('Authentication Complete')
     	 	);
	}

	logError(err) {
    	console.error('There was an error: ' + err);
  	}

}
