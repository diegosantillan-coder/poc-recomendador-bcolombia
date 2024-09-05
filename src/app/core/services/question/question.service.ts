import { Injectable, signal } from '@angular/core';
import { Request } from '@core/interfaces/question.interface';
import { UserBankia } from '@core/interfaces/user-bankia.interface';
import { UserService } from '@core/services/user/user.service';
@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	user = signal<UserBankia | null>(null);
	constructor(private userService: UserService) {
		this.user.set(this.userService.getUser());
	}

	getDefaultQuestions(): Request[] {
		return [
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: 'Quiero mi diagnóstico financiero'
			},
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: 'Quiero controlar mejor mis gastos'
			},
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: 'Quiero aprender hábitos de ahorro'
			}
		];
	}

	setUser(user: UserBankia): void {
		this.user.set(user);
	}
}
