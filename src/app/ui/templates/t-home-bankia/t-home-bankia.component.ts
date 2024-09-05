import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { MoleculesModule } from '@ui/molecules/molecules.module';
import { TModalComponent } from '../t-modal/t-modal.component';

@Component({
	selector: 't-home-bankia',
	standalone: true,
	imports: [AtomsModule, MoleculesModule, TModalComponent],
	templateUrl: './t-home-bankia.component.html',
	styleUrl: './t-home-bankia.component.scss'
})
export class THomeBankiaComponent {
	transactions: NavBar[] = [
		{
			id: 1,
			title: 'Enviar dinero',
			path: '/icons/avion.svg'
		},
		{
			id: 2,
			title: 'Pagar tarjetas',
			path: '/icons/tarjeta.svg'
		},
		{
			id: 3,
			title: 'Pagar crédito',
			path: '/icons/dolar.svg'
		}
	];

	formalities: NavBar[] = [
		{
			id: 1,
			title: 'Enviar dinero',
			path: '/icons/avion.svg'
		},
		{
			id: 2,
			title: 'Pagar tarjetas',
			path: '/icons/tarjeta.svg'
		},
		{
			id: 3,
			title: 'Pagar crédito',
			path: '/icons/dolar.svg'
		}
	];

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
