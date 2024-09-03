import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'a-separator',
	standalone: true,
	imports: [NgClass],
	templateUrl: './a-separator.component.html',
	styleUrl: './a-separator.component.scss'
})
export class ASeparatorComponent {
	@Input() styleClass = '';
}
