import { Component } from '@angular/core';

import {Footer} from '../partials/footer/Footer';
import {Header} from '../partials/header/Header';
import { ENV } from '../../providers/GlobalService';


@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl : 'index.html',
  	directives :[Footer,Header]
})
export class AppComponent {
	title = 'Tour of Heroes';
	private dis : any;
	dataAuth = ENV.auth;

	constructor(){
	this.dis = localStorage.getItem('auth');
		console.log(this.dis);
	}
}
