import { Component } from '@angular/core';
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
