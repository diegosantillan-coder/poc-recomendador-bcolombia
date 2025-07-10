import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'a-custom-button',
	standalone: true,
	imports: [TranslateModule],
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
