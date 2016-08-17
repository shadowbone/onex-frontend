import { Component, Input,Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class GlobalService {

}

/**
 * [ENV description]
 * @type {Object}
 * Desc : Untuk Variable Global
 */
export const ENV = {
	apiUrl : 'http://localhost/api.onex/',
	auth : JSON.parse(localStorage.getItem('auth')),
	token : localStorage.getItem('token'),
};

