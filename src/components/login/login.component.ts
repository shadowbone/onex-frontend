import { Component,Directive,Pipe } from '@angular/core';
import { LoginService } from '../../providers/login.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
  	selector: 'my-login',
  	templateUrl : 'index.html'
})
export class LoginComponent
{ 	
	hideElement: Boolean = false;
	private data;
	private apiUrl : string;
	private title : string;
	private token : string;
	private error : Object = {};
	private userForm : any = {};

	constructor(
		private loginService : LoginService,
		private router:Router
		)
	{
		this.title = 'OnEx';
	}

  	getData()
  	{
  		return this.loginService.getData()
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
	      let ceh = localStorage.getItem('id_token');
	      	    	console.log(ceh);
	    	console.log('Awal');
	    }
  	}

  	auth(auth){
  		if(auth){
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
			.postData(data)
			.map(response => response.json())
			.subscribe(
			    data => {
			        this.saveJwt(data.token);
			        this.auth(data.data);
			        this.userForm.email = null;
			        this.userForm.password = null;
			        this.router.navigate(['./home']);
			    },
			    (err) => this.validation(err.json()),
			    () => console.log('Authentication Complete')
	     	);
	}

	validation(err : any){
		let dataArray : any =  [];
		this.error = {};
		for(let key in err){
		 	this.error[key] = err[key][0];
		}
		return this.error;
	}
}
