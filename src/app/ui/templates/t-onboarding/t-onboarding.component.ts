import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@core/services/modal/modal.service';
import { OnboardingService } from '@core/services/onboarding/onboarding.service';
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
	private readonly isVisibleService = inject(ModalService);
	private readonly onboardingService = inject(OnboardingService);

	@Input() pathImage = '';
	@Input() title = '';
	@Input() description = '';
	@Input() page = '';

	goNextStep() {
		if (this.page !== 'step-4') {
			this.router.navigate(['onboarding/' + this.page]);
			this.setModalStatus(false);
		} else if (this.page === 'step-4') {
			this.setModalStatus(true);
			this.setOnboarding();
			this.goHome();
			this.openModal();
		}
	}

	goHome() {
		this.router.navigate(['home']);
	}

	setModalStatus(status: boolean) {
		this.isVisibleService.setModalStatus(status);
	}

	setOnboarding() {
		this.onboardingService.setOnboarding(true);
		localStorage.setItem('onboarding', 'true');
	}

	showModal = false;

	openModal(): void {
		this.showModal = true;
	}

	closeModal(): void {
		this.goHome();
		this.showModal = false;
	}
}
