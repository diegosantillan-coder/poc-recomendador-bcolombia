import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserBankia } from '@core/interfaces/user-bankia.interface';
import { QuestionService } from '@core/services/question/question.service';
import { SessionService } from '@core/services/session/session.service';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { MoleculesModule } from '../../molecules/molecules.module';

@Component({
	selector: 't-login-bankia',
	standalone: true,
	imports: [AtomsModule, ReactiveFormsModule, MoleculesModule],
	templateUrl: './t-login-bankia.component.html',
	styleUrl: './t-login-bankia.component.scss'
})
export class TLoginBankiaComponent implements OnInit {
	loginForm!: FormGroup;
	sessionId = '';
	@HostListener('document:keydown.enter', ['$event'])
	handleEnter(event: KeyboardEvent) {
		console.log(event);

		if (this.loginForm.valid) {
			this.onSubmit();
		}
	}

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private sessionService: SessionService,
		private questionService: QuestionService
	) {
		localStorage.removeItem('user');
		localStorage.removeItem('onboarding');
	}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			usuario: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});

		this.sessionId = this.sessionService.generateSessionId();
	}

	onSubmit(): void {
		if (this.loginForm.valid) {
			const user: UserBankia = this.loginForm.value;
			user.sessionId = this.sessionId;
			localStorage.setItem('user', JSON.stringify(user));
			this.questionService.setUser(user);
			this.router.navigate(['/home']);
		}
	}

	togglePasswordVisibility(): void {
		const passwordField = document.getElementById('password') as HTMLInputElement;
		const passwordFieldType = passwordField.getAttribute('type');
		passwordField.setAttribute('type', passwordFieldType === 'password' ? 'text' : 'password');
	}
}
