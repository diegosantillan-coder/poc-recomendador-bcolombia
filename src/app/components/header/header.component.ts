import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@core/services/modal/modal.service';
import { OnboardingService } from '@core/services/onboarding/onboarding.service';
import { OrganismsModule } from '@ui/organisms/organisms.module';
import { AtomsModule } from '../../ui/atoms/atoms.module';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [OrganismsModule, AtomsModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	private readonly router = inject(Router);
	private readonly onboardingService = inject(OnboardingService);
	private readonly modalService = inject(ModalService);

	exit() {
		this.router.navigate(['/login']);
		localStorage.removeItem('user');
		localStorage.removeItem('onboarding');
		this.onboardingService.setOnboarding(false);
		this.modalService.setModalStatus(false);
	}
}
