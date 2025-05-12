import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-step-3',
	standalone: true,
	imports: [TemplatesModule, TranslateModule],
	templateUrl: './step-3.component.html',
	styleUrl: './step-3.component.scss'
})
export class Step3Component {}
