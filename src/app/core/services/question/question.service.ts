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
		this.user.set(this.userService.getUser());
		return [
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: 'home.modal.defaultQuestions.question1'
			},
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: 'home.modal.defaultQuestions.question2'
			},
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: 'home.modal.defaultQuestions.question3'
			}
		];
	}

	setUser(user: UserBankia): void {
		this.user.set(user);
	}
}
