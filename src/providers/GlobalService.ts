import { Injectable }    from '@angular/core';

@Injectable()
export class GlobalService {

}

export const ENV = {
	apiUrl : 'http://localhost/api.onex/',
	auth : JSON.parse(localStorage.getItem('auth')),
	token : localStorage.getItem('token'),
};