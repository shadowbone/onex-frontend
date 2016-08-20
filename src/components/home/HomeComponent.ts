import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import {Footer} from '../partials/footer/Footer';
import {Header} from '../partials/header/Header';
@Component({
	moduleId : module.id,
	selector :'home-component',
	templateUrl : 'index.html',
	directives : [Footer,Header]
})

export class HomeComponent {
	test = 'ahay';
	constructor(){
		this.test = 'Okery';
	}
}