import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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

	exit() {
		this.router.navigate(['/login']);
		localStorage.removeItem('user');
	}
}
