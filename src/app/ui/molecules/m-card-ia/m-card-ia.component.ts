import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'm-card-ia',
	standalone: true,
	imports: [NgClass],
	templateUrl: './m-card-ia.component.html',
	styleUrl: './m-card-ia.component.scss'
})
export class MCardIaComponent {
	@Input() title = '';
	@Input() description = '';
	@Input() descriptionMobile = '';
	@Input() src = '';
	@Input() cssStyle = '';
	@Input() circleStyle = '';
}
