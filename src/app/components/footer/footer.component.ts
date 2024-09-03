import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { MNavbarComponent } from '@ui/molecules/m-navbar/m-navbar.component';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [MNavbarComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	navBarAch: NavBar[] = [
		{ id: 1, title: 'Transversal 23 # 97-73 Piso 3', path: '/home' },
		{ id: 2, title: 'Edificio City Business', path: '/services' },
		{ id: 3, title: 'Bogota, Colombia', path: '/contact' }
	];

	navBarCompany: NavBar[] = [
		{
			id: 1,
			title: 'Politica de tratamiento de datos personales',
			path: '/home'
		},
		{ id: 2, title: '¿Cómo hacer y pagar la planilla?', path: '/services' },
		{ id: 3, title: 'Ventajas de SOI', path: '/contact' },
		{ id: 3, title: 'Servicios de SOI', path: '/contact' },
		{ id: 3, title: 'Calculadora de planilla', path: '/contact' },
		{ id: 3, title: 'Centro de ayuda', path: '/contact' },
		{ id: 3, title: 'Blog', path: '/contact' },
		{ id: 3, title: 'Trabaja con nosotros', path: '/contact' }
	];
	navBarProducts: NavBar[] = [
		{ id: 1, title: 'ACH Colombia', path: '/home' },
		{ id: 2, title: 'PSE', path: '/services' },
		{ id: 3, title: 'Transfiya', path: '/contact' }
	];
}
