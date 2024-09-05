import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class OnboardingService {
	showOnboarding = signal(false);

	getOnboarding() {
		return this.showOnboarding;
	}

	setOnboarding(status: boolean) {
		this.showOnboarding = signal(status);
	}
}
