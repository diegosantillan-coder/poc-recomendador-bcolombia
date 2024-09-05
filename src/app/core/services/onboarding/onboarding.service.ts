import { inject, Injectable, signal } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Injectable({
	providedIn: 'root'
})
export class OnboardingService {
	private readonly modalService = inject(ModalService);

	showOnboarding = signal(false);

	getOnboarding() {
		if (localStorage.getItem('onboarding') === 'true') {
			this.setOnboarding(true);
		} else {
			this.setOnboarding(false);
			this.modalService.setModalStatus(false);
		}
		return this.showOnboarding;
	}

	setOnboarding(status: boolean) {
		this.showOnboarding = signal(status);
	}
}
