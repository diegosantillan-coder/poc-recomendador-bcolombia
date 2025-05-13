import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-language-switcher',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './language-switcher.component.html',
	styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
	currentLang = 'en';

	constructor(private translate: TranslateService) {}

	ngOnInit(): void {
		const savedLang = localStorage.getItem('lang');
		this.currentLang = savedLang ?? 'en';
		this.translate.use(this.currentLang);
	}

	toggleLanguage(): void {
		this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
		this.translate.use(this.currentLang);
		localStorage.setItem('lang', this.currentLang);
	}
}
