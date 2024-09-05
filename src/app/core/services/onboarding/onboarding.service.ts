import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OnboardingService {
	showOnboarding = signal(false);

	getOnboarding() {
		if (localStorage.getItem('onboarding') === 'true') {
			this.setOnboarding(true);
		} else {
			this.setOnboarding(false);
		}
		return this.showOnboarding;
	}

	setOnboarding(status: boolean) {
		this.showOnboarding = signal(status);
	}
}
