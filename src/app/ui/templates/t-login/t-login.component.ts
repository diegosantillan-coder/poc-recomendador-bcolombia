import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/interfaces/user.interface';
import { SessionService } from '@core/services/session/session.service';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { ASeparatorComponent } from '../../atoms/a-separator/a-separator.component';

@Component({
	selector: 't-login',
	standalone: true,
	imports: [AtomsModule, ASeparatorComponent, ReactiveFormsModule],
	templateUrl: './t-login.component.html',
	styleUrl: './t-login.component.scss'
})
export class TLoginComponent implements OnInit {
	loginForm!: FormGroup;
	sessionId = '';
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private sessionService: SessionService
	) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			documentType: ['', Validators.required],
			documentNumber: [
				'',
				[Validators.required, Validators.pattern('^[0-9]+$')]
			],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});

		this.loginForm.controls['documentType'].setValue('cc');
		this.sessionId = this.sessionService.generateSessionId();
	}

	onSubmit(): void {
		if (this.loginForm.valid) {
			const user: User = this.loginForm.value;
			user.sessionId = this.sessionId;
			localStorage.setItem('user', JSON.stringify(user));
			console.log('User logged in', user);
			this.router.navigate(['/home']);
		}
	}

	togglePasswordVisibility(): void {
		const passwordField = document.getElementById(
			'password'
		) as HTMLInputElement;
		const passwordFieldType = passwordField.getAttribute('type');
		passwordField.setAttribute(
			'type',
			passwordFieldType === 'password' ? 'text' : 'password'
		);
	}
}
