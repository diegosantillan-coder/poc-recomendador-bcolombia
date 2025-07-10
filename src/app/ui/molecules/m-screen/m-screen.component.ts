import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'm-screen',
	standalone: true,
	imports: [],
	templateUrl: './m-screen.component.html',
	styleUrl: './m-screen.component.scss'
})
export class MScreenComponent implements OnInit {
	private readonly router = inject(Router);

	ngOnInit(): void {
		this.goToLogin();
	}

	goToLogin() {
		setTimeout(() => {
			this.router.navigate(['/login']);
		}, 2000);
	}
}
