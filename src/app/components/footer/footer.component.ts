import { Component } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { MNavbarComponent } from '@ui/molecules/m-navbar/m-navbar.component';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [MNavbarComponent, AtomsModule],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	navBarFooter: NavBar[] = [
		{ id: 1, title: 'Casa', path: 'icons/casa.svg' },
		{ id: 2, title: 'Lupa', path: 'icons/lupa.svg' },
		{ id: 3, title: 'App', path: 'icons/apps.svg' },
		{ id: 4, title: 'Candado', path: 'icons/candado.svg' },
		{ id: 5, title: 'Config', path: 'icons/config.svg' }
	];
}
