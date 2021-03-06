import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable, Subject} from "rxjs/Rx";
import { LoginService } from "./login.service";

@Injectable()
export class AuthGuard implements  CanActivate {
	constructor(
		private loginService : LoginService, 
		private router : Router
		) 
	{

	}

	canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | boolean {
		var Auth  = this.loginService.isAuth();
		var subject = new Subject<boolean>();
		Auth.subscribe((res) => {
			if(!res && state.url !== '/login'){
            this.router.navigate(['/login']);
			}
			subject.next(res);
		});
		return subject.asObservable().take(1);
	}
}