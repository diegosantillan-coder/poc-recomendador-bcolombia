import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/user.interface';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	getUser(): User {
		const user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	}
}
