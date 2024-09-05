import { Component, Input } from '@angular/core';

@Component({
	selector: 'm-card-info',
	standalone: true,
	imports: [],
	templateUrl: './m-card-info.component.html',
	styleUrl: './m-card-info.component.scss'
})
export class MCardInfoComponent {
	@Input() title = '';
	@Input() description = '';
}
