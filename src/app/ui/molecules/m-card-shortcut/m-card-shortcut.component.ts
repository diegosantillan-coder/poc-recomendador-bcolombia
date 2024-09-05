import { Component, Input } from '@angular/core';
import { NavBar } from '@core/interfaces/navbar.interface';
import { ACardShortcutComponent } from '../../atoms/a-card-shortcut/a-card-shortcut.component';

@Component({
	selector: 'm-card-shortcut',
	standalone: true,
	imports: [ACardShortcutComponent],
	templateUrl: './m-card-shortcut.component.html',
	styleUrl: './m-card-shortcut.component.scss'
})
export class MCardShortcutComponent {
	@Input() options: NavBar[] = [];
	@Input() subTitle = '';
}
