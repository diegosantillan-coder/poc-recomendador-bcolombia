import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, TranslateModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'poc-asistente-soi';

	currentLang = 'en';

	constructor(private translate: TranslateService) {
		this.translate.setDefaultLang(this.currentLang);
		this.translate.use(this.currentLang);
	}

	switchLanguage() {
		this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
		this.translate.use(this.currentLang);
	}
}
