import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'a-logo',
	standalone: true,
	imports: [NgClass],
	templateUrl: './a-logo.component.html',
	styleUrl: './a-logo.component.scss'
})
export class ALogoComponent {
	@Input() src = '';
}
