import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'a-title-bankia',
	standalone: true,
	imports: [NgClass],
	templateUrl: './a-title-bankia.component.html',
	styleUrl: './a-title-bankia.component.scss'
})
export class ATitleBankiaComponent {
	@Input() styleClass = '';
	@Input() text = '';
}
