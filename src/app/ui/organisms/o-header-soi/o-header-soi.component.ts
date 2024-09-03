import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { ALogoComponent } from '@ui/atoms/a-logo/a-logo.component';
import { MNavbarComponent } from '@ui/molecules/m-navbar/m-navbar.component';

@Component({
	selector: 'o-header-soi',
	standalone: true,
	imports: [ALogoComponent, MNavbarComponent],
	templateUrl: './o-header-soi.component.html',
	styleUrl: './o-header-soi.component.scss'
})
export class OHeaderSoiComponent {
	showSeparator = true;
	navBar: NavBar[] = [
		{ id: 1, title: '¿Cómo hacer y pagar la planilla?', path: '/home' },
		{ id: 2, title: 'SOI mejor para ti', path: '/services' },
		{ id: 3, title: 'Ventajas de SOI', path: '/contact' },
		{ id: 4, title: 'Convenios comerciales', path: '/contact' },
		{ id: 5, title: 'Servicios de SOI', path: '/contact' },
		{ id: 6, title: 'Calculadora de planilla', path: '/contact' },
		{ id: 7, title: 'Centro de Ayuda', path: '/contact' },
		{ id: 8, title: 'Blogs y eventos', path: '/contact' }
	];
}
