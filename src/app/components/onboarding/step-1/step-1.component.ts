import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-step-1',
	standalone: true,
	imports: [TemplatesModule, TranslateModule],
	templateUrl: './step-1.component.html',
	styleUrl: './step-1.component.scss'
})
export class Step1Component {}
