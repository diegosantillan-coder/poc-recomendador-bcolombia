import { Component } from '@angular/core';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-step-3',
	standalone: true,
	imports: [TemplatesModule],
	templateUrl: './step-3.component.html',
	styleUrl: './step-3.component.scss'
})
export class Step3Component {}
