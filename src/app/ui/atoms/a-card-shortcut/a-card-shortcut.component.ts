import { Component, Input } from '@angular/core';
import { AtomsModule } from '../atoms.module';

@Component({
	selector: 'a-card-shortcut',
	standalone: true,
	imports: [AtomsModule],
	templateUrl: './a-card-shortcut.component.html',
	styleUrl: './a-card-shortcut.component.scss'
})
export class ACardShortcutComponent {
	@Input() text = '';
	@Input() pathIcon = '';
}
