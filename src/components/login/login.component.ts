import { Component,Directive,Pipe } from '@angular/core';
import { LoginService } from '../../providers/login.service';
import { ENV  } from '../../providers/GlobalService';
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
	private error : Object = {};
	private userForm = {
		email : '',
		password : ''
	};

	constructor(
		private loginService : LoginService,
		private router:Router
		)
	{
		this.title = 'OnEx';
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
		let data = {
			email : this.userForm.email,
			password : this.userForm.password
		};
		return this.loginService
			.postData(ENV.apiUrl + 'auth/login', data)
			.map(response => response.json())
			.subscribe(
			    data => {
			        this.saveJwt(data.token);
			        this.auth(data.data);
			        this.status = false;
			        this.userForm.email = null;
			        this.userForm.password = null;
			        // window.location.href = ENV.apiUrl + "master/soal";
			    },
			    (err) => this.validation(err.json()),
			    () => console.log('Authentication Complete')
	     	);
	}

	validation(err : any){
		let dataArray : any =  [];
		for(let key in err){
		 	this.error[key] = err[key][0];
		}
		return this.error;
	}

	logError(err) {
    	console.log(err);
  	}

}
