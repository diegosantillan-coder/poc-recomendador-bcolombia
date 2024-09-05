import { Component } from '@angular/core';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-step-2',
	standalone: true,
	imports: [TemplatesModule],
	templateUrl: './step-2.component.html',
	styleUrl: './step-2.component.scss'
})
export class Step2Component {}
