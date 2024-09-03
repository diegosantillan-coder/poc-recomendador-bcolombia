import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { ALogoComponent } from '@ui/atoms/a-logo/a-logo.component';
import { ASeparatorComponent } from '@ui/atoms/a-separator/a-separator.component';
import { MNavbarComponent } from '@ui/molecules/m-navbar/m-navbar.component';

@Component({
	selector: 'o-header-ach',
	standalone: true,
	imports: [ALogoComponent, MNavbarComponent, ASeparatorComponent],
	templateUrl: './o-header-ach.component.html',
	styleUrl: './o-header-ach.component.scss'
})
export class OHeaderAchComponent {
	noShowSeparator = false;
	showSeparator = true;
	navBar: NavBar[] = [
		{ id: 1, title: 'SOI', path: '/home' },
		{ id: 2, title: 'PSE', path: '/services' },
		{ id: 3, title: 'TRANSFIYA', path: '/contact' },
		{ id: 4, title: 'ACH COLOMBIA', path: '/contact' }
	];
	navBarHelp: NavBar[] = [
		{ id: 1, title: '¿Ayuda?', path: '/home' },
		{ id: 2, title: 'Contáctenos', path: '/services' }
	];

	navBarMobile: NavBar[] = [
		{ id: 1, title: 'SOI', path: '/home' },
		{ id: 2, title: '¿Ayuda?', path: '/services' }
	];
}
