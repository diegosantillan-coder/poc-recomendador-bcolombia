import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { ACardShortcutComponent } from '../../atoms/a-card-shortcut/a-card-shortcut.component';

@Component({
	selector: 'm-card-shortcut',
	standalone: true,
	imports: [ACardShortcutComponent],
	templateUrl: './m-card-shortcut.component.html',
	styleUrl: './m-card-shortcut.component.scss'
})
export class MCardShortcutComponent {
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
}
