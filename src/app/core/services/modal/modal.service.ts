import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	isVisible = signal(false);

	getModalStatus() {
		return this.isVisible;
	}

	setModalStatus(status: boolean) {
		this.isVisible = signal(status);
	}
}
