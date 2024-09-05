import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { MoleculesModule } from '@ui/molecules/molecules.module';
import { TModalComponent } from '../t-modal/t-modal.component';

@Component({
	selector: 't-onboarding',
	standalone: true,
	imports: [AtomsModule, MoleculesModule, TModalComponent],
	templateUrl: './t-onboarding.component.html',
	styleUrl: './t-onboarding.component.scss'
})
export class TOnboardingComponent {
	private readonly router = inject(Router);

	@Input() pathImage = '';
	@Input() title = '';
	@Input() description = '';
	@Input() page = '';

	goNextStep() {
		this.router.navigate(['onboarding/' + this.page]);
	}

	goHome() {
		this.router.navigate(['home']);
	}

	showModal = false;

	openModal(): void {
		console.log('openModal');

		this.showModal = true;
	}

	closeModal(): void {
		console.log('closeModal');

		this.showModal = false;
	}
}
