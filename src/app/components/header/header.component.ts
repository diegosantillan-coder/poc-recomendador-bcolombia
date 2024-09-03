import { Component } from '@angular/core';
import { OrganismsModule } from '@ui/organisms/organisms.module';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [OrganismsModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {}
