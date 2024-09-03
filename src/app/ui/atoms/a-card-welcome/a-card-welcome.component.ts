import { Component, Input } from '@angular/core';

@Component({
	selector: 'a-card-welcome',
	standalone: true,
	imports: [],
	templateUrl: './a-card-welcome.component.html',
	styleUrl: './a-card-welcome.component.scss'
})
export class ACardWelcomeComponent {
	@Input() title = '';
}
