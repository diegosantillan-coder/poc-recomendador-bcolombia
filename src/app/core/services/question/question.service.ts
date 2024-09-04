// question.service.ts
import { Injectable } from '@angular/core';
import { Request } from '@core/interfaces/question.interface';
import { User } from '@core/interfaces/user.interface';
import { UserService } from '@core/services/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class QuestionService {
	user: User = {
		documentType: '',
		documentNumber: '',
		password: '',
		sessionId: ''
	};
	constructor(private userService: UserService) {
		this.user = this.userService.getUser();
	}

	getDefaultQuestions(): Request[] {
		return [
			{
				user_id: this.user.documentNumber,
				session_id: this.user.sessionId,
				prompt: 'Quiero mi diagnóstico financiero'
			},
			{
				user_id: this.user.documentNumber,
				session_id: this.user.sessionId,
				prompt: 'Quiero controlar mejor mis gastos'
			},
			{
				user_id: this.user.documentNumber,
				session_id: this.user.sessionId,
				prompt: 'Quiero aprender hábitos de ahorro'
			}
		];
	}
}
