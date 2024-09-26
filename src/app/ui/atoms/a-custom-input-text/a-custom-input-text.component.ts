import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'a-custom-input-text',
	standalone: true,
	imports: [],
	templateUrl: './a-custom-input-text.component.html',
	styleUrl: './a-custom-input-text.component.scss'
})
export class ACustomInputTextComponent {
	@Input() disableInput = false;
	@Output() debouncedInput = new EventEmitter<string>();
	@Output() inputChanged = new EventEmitter<boolean>();

	@ViewChild('textInput') textInput!: ElementRef<HTMLTextAreaElement>;
	private inputSubject = new Subject<string>();
	public currentValue = '';
	private isResetting = false; // Nueva bandera

	onInputChange(event: Event): void {
		const input = event.target as HTMLInputElement;
		this.inputSubject.next(input.value);
		this.currentValue = input.value;
		if (!this.isResetting) {
			this.autoResize();
		} else {
			this.isResetting = false;
		}
		if (this.currentValue.length <= 0) {
			this.inputChanged.emit(false);
		} else {
			this.inputChanged.emit(true);
		}
	}

	onKeyDown(event: KeyboardEvent): void {
		const input = event.target as HTMLInputElement;
		if (event.key === 'Enter' && input.value.trim()) {
			this.debouncedInput.emit(input.value);
			this.clearInput(input);
			this.resetHeight();
		}
	}

	clearInput(input: HTMLInputElement): void {
		input.value = '';
		this.currentValue = '';
		this.inputSubject.next('');
		this.inputChanged.emit(false);
	}

	clearInputFrom(): void {
		this.textInput.nativeElement.value = '';
	}

	focusInput(): void {
		if (this.textInput) {
			this.textInput.nativeElement.focus();
		}

		const textArea = this.textInput.nativeElement;
		// Elimina cualquier salto de línea vacío al final
		const trimmedValue = textArea.value.trimEnd();
		if (textArea.value !== trimmedValue) {
			textArea.value = trimmedValue; // Quita los saltos de línea al final
			this.currentValue = trimmedValue;
		}
		// Mover el cursor al final del texto
		const length = textArea.value.length;
		textArea.setSelectionRange(length, length);
	}

	autoResize() {
		const textArea = this.textInput.nativeElement;
		textArea.style.height = 'auto';
		textArea.style.height = `${textArea.scrollHeight}px`;
		textArea.style.overflowY = 'auto';
	}

	resetHeight() {
		this.isResetting = true;
		const textArea = this.textInput.nativeElement;
		textArea.rows = 1;
		textArea.style.height = 'auto';
		textArea.style.height = `${64}px`;
		textArea.style.overflow = 'hidden';
	}
}
