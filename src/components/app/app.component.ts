import { Component } from '@angular/core';

import {Footer} from '../partials/Footer';
import {Header} from '../partials/Header';


@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl : 'index.html',
  	directives :[Footer,Header]
})
export class AppComponent {
	title : string;

	constructor(){
		console.log(__dirname);
		this.title = 'Ini Halaman APP';
	}
}
