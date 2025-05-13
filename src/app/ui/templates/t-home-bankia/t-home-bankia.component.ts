import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavBar } from '@core/interfaces/navbar.interface';
import { OnboardingService } from '@core/services/onboarding/onboarding.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { MoleculesModule } from '@ui/molecules/molecules.module';
import { TModalComponent } from '../t-modal/t-modal.component';

@Component({
	selector: 't-home-bankia',
	standalone: true,
	imports: [AtomsModule, MoleculesModule, TModalComponent, TranslateModule],
	templateUrl: './t-home-bankia.component.html',
	styleUrl: './t-home-bankia.component.scss'
})
export class THomeBankiaComponent {
	private readonly router = inject(Router);
	private readonly onboardingService = inject(OnboardingService);
	private readonly translate = inject(TranslateService);
	@Input() showModal = false;

	transactions: NavBar[] = [
		{ id: 1, title: 'home.transactions.sendMoney', path: '/icons/avion.svg' },
		{ id: 2, title: 'home.transactions.payCards', path: '/icons/tarjeta.svg' },
		{ id: 3, title: 'home.transactions.payCredit', path: '/icons/dolar.svg' }
	];

	formalities: NavBar[] = [
		{ id: 1, title: 'home.formalities.bankStatements', path: '/icons/documento.svg' },
		{ id: 2, title: 'home.formalities.upcomingPayments', path: '/icons/calendario.svg' },
		{ id: 3, title: 'home.formalities.faq', path: '/icons/mensaje.svg' }
	];

	openModal(): void {
		this.showModal = true;
	}

	goOnboarding(): void {
		if (this.onboardingService.getOnboarding()()) {
			this.openModal();
		} else {
			this.router.navigate(['/onboarding/step-1']);
		}
	}

	closeModal(): void {
		this.showModal = false;
	}
}
