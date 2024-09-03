import { Component } from '@angular/core';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { TemplatesModule } from '@ui/templates/templates.module';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [HeaderComponent, FooterComponent, TemplatesModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {}
