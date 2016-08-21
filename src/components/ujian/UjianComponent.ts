import { Component } from '@angular/core';
import { ModelService } from '../../providers/ModelService';

@Component({
	moduleId: module.id,
	selector: 'ujian-component',
	templateUrl: 'index.html',
	providers : [ModelService]
})
export class UjianComponent {
	private input : any = {};
	private error : Object = {};
	title = 'CRUD';
	
	constructor(
		private service : ModelService
	) 
	{

	}

	storage()
	{
		return {
			name : this.input.name,
			keterangan : this.input.keterangan,
			type : this.input.type		
		};
	}

	post()
	{
		let url = 'soal/create';
		return this.service.create(url,this.storage())
				.subscribe(
					data => {
						console.log(data);
					},
					(err) => console.log(err)
				);
	}

	delete()
	{

	}

	put()
	{

	}

	get()
	{

	}
}