import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'a-button',
	standalone: true,
	imports: [NgClass],
	templateUrl: './a-button.component.html',
	styleUrl: './a-button.component.scss'
})
export class AButtonComponent {
	@Input() styleClass = 'a-button-primary';
	@Input() text = '';
	@Output() buttonClick = new EventEmitter<void>();

	handleClick(): void {
		this.buttonClick.emit();
	}
}
