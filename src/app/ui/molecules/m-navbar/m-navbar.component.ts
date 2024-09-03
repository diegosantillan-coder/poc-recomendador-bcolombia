import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { ASeparatorComponent } from '@ui/atoms/a-separator/a-separator.component';

@Component({
	selector: 'm-navbar',
	standalone: true,
	imports: [UpperCasePipe, NgClass, ASeparatorComponent],
	templateUrl: './m-navbar.component.html',
	styleUrl: './m-navbar.component.scss'
})
export class MNavbarComponent {
	@Input() navBar!: NavBar[];
	@Input() titleNavBar = '';
	@Input() styleClass = 'm-navbar-primary';
	@Input() styleSeparator = '';
	@Input() separator = false;
}
