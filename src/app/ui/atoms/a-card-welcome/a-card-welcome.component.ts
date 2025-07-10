import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'a-card-welcome',
	standalone: true,
	imports: [TranslateModule],
	templateUrl: './a-card-welcome.component.html',
	styleUrl: './a-card-welcome.component.scss'
})
export class ACardWelcomeComponent {
	@Input() title = '';
}
