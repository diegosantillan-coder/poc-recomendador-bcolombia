import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-onboarding',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './onboarding.component.html',
	styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {}
