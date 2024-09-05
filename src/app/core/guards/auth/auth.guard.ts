import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '@core/interfaces/user.interface';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	sessionId = '';
	constructor(private router: Router) {
		const user: User = JSON.parse(localStorage.getItem('user') || '{}');
		this.sessionId = user.sessionId;
	}

	canActivate(): boolean {
		const user: User = JSON.parse(localStorage.getItem('user') || '{}');
		this.sessionId = user.sessionId;

		if (this.sessionId) {
			return true;
		} else {
			this.router.navigate(['login']);
			return false;
		}
	}
}
