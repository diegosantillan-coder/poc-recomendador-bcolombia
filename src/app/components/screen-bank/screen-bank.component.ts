import { Component } from '@angular/core';
import { MoleculesModule } from '../../ui/molecules/molecules.module';

@Component({
	selector: 'app-screen-bank',
	standalone: true,
	imports: [MoleculesModule],
	templateUrl: './screen-bank.component.html',
	styleUrl: './screen-bank.component.scss'
})
export class ScreenBankComponent {}
