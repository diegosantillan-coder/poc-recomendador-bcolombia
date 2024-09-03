import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TextService {
	formatText(text: string): string {
		const formattedText = text.replace(/\n/g, '<br>');
		return formattedText;
	}

	extractLink(text: string): string | null {
		// eslint-disable-next-line no-useless-escape
		const regex = /(https:\/\/[\w.].*[\=]+\d\d\d\d\d\d\d\d\d\d)/;
		const match = text.match(regex);
		return match ? match[0] : null;
	}

	generateLinkHtml(text: string): string {
		const link = this.extractLink(text);
		console.log(link);

		return link
			? text.replace(
					link,
					`<a href="${link}" target="_blank" style="color: blue; text-decoration: underline;">Descargar planilla</a>`
				)
			: text;
	}
}
