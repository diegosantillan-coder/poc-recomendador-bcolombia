import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'a-custom-button',
	standalone: true,
	imports: [],
	templateUrl: './a-custom-button.component.html',
	styleUrl: './a-custom-button.component.scss'
})
export class ACustomButtonComponent {
	@Input() text = '';
	@Output() buttonClick = new EventEmitter<void>();

	handleClick(): void {
		this.buttonClick.emit();
	}
}
