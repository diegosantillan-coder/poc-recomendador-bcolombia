import { Injectable } from '@angular/core';
import { UserBankia } from '@core/interfaces/user-bankia.interface';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	getUser(): UserBankia {
		const user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	}
}
