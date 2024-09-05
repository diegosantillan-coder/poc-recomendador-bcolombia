import { Component } from '@angular/core';
import { OrganismsModule } from '@ui/organisms/organisms.module';
import { AtomsModule } from '../../ui/atoms/atoms.module';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [OrganismsModule, AtomsModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {}
