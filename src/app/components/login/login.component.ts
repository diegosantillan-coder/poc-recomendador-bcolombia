import { Component } from '@angular/core';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [TemplatesModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {}
