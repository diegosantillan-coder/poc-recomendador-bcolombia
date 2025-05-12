import { Injectable, signal } from '@angular/core';
import { Request } from '@core/interfaces/question.interface';
import { UserBankia } from '@core/interfaces/user-bankia.interface';
import { UserService } from '@core/services/user/user.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	user = signal<UserBankia | null>(null);

	constructor(
		private userService: UserService,
		private translate: TranslateService
	) {
		this.user.set(this.userService.getUser());
	}

	async getDefaultQuestions(): Promise<Request[]> {
		this.user.set(this.userService.getUser());

		const translations = await this.translate
			.get([
				'home.modal.defaultQuestions.question1',
				'home.modal.defaultQuestions.question2',
				'home.modal.defaultQuestions.question3'
			])
			.toPromise();

		return [
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: translations['home.modal.defaultQuestions.question1']
			},
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: translations['home.modal.defaultQuestions.question2']
			},
			{
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				prompt: translations['home.modal.defaultQuestions.question3']
			}
		];
	}

	setUser(user: UserBankia): void {
		this.user.set(user);
	}
}
