import { Component } from '@angular/core';
import { routing }   from './../../app.routing';
@Component({
  selector: 'my-app',
  templateUrl : './src/components/app/index.html'
})
export class AppComponent {
	title : string;

	constructor(){
		this.title = 'Ini Halaman APP';
	}
}
