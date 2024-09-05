import { NgClass } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Output,
	ViewChild
} from '@angular/core';
import { QuestionRequest, Request } from '@core/interfaces/question.interface';
import { User } from '@core/interfaces/user.interface';
import { AgentService } from '@core/services/agent/agent.service';
import { QuestionService } from '@core/services/question/question.service';
import { TextService } from '@core/services/text/text.service';
import { UserService } from '@core/services/user/user.service';
import { ACustomInputTextComponent } from '@ui/atoms/a-custom-input-text/a-custom-input-text.component';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { ACardChatComponent } from '../../atoms/a-card-chat/a-card-chat.component';

@Component({
	selector: 't-modal',
	standalone: true,
	imports: [AtomsModule, NgClass, ACardChatComponent],
	templateUrl: './t-modal.component.html',
	styleUrl: './t-modal.component.scss'
})
export class TModalComponent implements AfterViewInit {
	private readonly agentService = inject(AgentService);
	private readonly userService = inject(UserService);
	private readonly questionService = inject(QuestionService);
	private readonly formatTextService = inject(TextService);

	chats: { text: string; isUser: boolean }[] = [];

	valueInput = '';
	isInputEmpty = false;
	isDisableInput = false;
	isTyping = false; // Bandera para indicar si está "escribiendo"
	welcome = true;
	defaultQuestion: Request[] = this.questionService.getDefaultQuestions();
	user: User = this.userService.getUser();

	@ViewChild('chatContainer') chatContainer!: ElementRef;
	@Output() onclose = new EventEmitter<void>();

	@ViewChild(ACustomInputTextComponent, { static: false })
	inputText!: ACustomInputTextComponent;

	handleClose(): void {
		this.onclose.emit();
	}

	handleInputChanged(value: boolean): void {
		this.isInputEmpty = value;
	}

	handleDebouncedInput(value: string): void {
		this.valueInput = value;
		if (this.valueInput) {
			this.askingTheAgent({
				request: {
					user_id: this.user.documentNumber,
					session_id: this.user.sessionId,
					prompt: this.valueInput
				}
			});

			this.welcome = false;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
		}

		setTimeout(() => this.scrollToBottom(), 0);
	}

	sendDefaultQuestion(question: Request): void {
		if (question.prompt) {
			this.welcome = false;
			this.valueInput = question.prompt;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
			this.askingTheAgent({ request: question });
		}
	}

	sendQuestion(): void {
		this.valueInput = this.inputText.currentValue;
		if (this.valueInput.length <= 0) return;
		if (this.valueInput.trim()) {
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
			this.askingTheAgent({
				request: {
					user_id: this.user.documentNumber,
					session_id: this.user.sessionId,
					prompt: this.valueInput
				}
			});
			this.welcome = false;
			setTimeout(() => this.scrollToBottom(), 0);
		}
	}

	ngAfterViewInit(): void {
		this.scrollToBottom();
		console.log(this.defaultQuestion);
	}

	private scrollToBottom(): void {
		if (this.chatContainer) {
			const container = this.chatContainer.nativeElement;
			if (container) {
				container.scrollTop = container.scrollHeight;
				setTimeout(() => {
					container.scrollTop = container.scrollHeight;
				}, 100);
			}
		}
	}

	async askingTheAgent(request: QuestionRequest): Promise<void> {
		this.isInputEmpty = false;
		this.isDisableInput = true;
		this.isTyping = true;

		try {
			// Llama al método asincrónico y espera la respuesta
			const response = await this.agentService.getResponseAgentAsync(request);
			const answer = this.formatTextService.formatText(response.agent_answer);
			const answerLinkFormat = this.formatTextService.generateLinkHtml(answer);

			// Si hay respuesta del agente, se añade a la lista de chats
			if (response.agent_answer) {
				this.chats.push({
					text: answerLinkFormat,
					isUser: false
				});
			}

			// Reactivar el input y cambiar el estado de "escribiendo"
			this.isDisableInput = false;
			this.isTyping = false;

			// Enfocar el input de texto y hacer scroll al fondo del chat
			this.tryFocusInput();
			setTimeout(() => this.scrollToBottom(), 0);
		} catch (error) {
			console.error('Error al obtener la respuesta del agente:', error);

			// Asegura que el input se vuelva a habilitar en caso de error
			this.isDisableInput = false;
			this.isTyping = false;

			// Mostrar un mensaje de error en el chat
			this.chats.push({
				text: 'Hubo un error al procesar la solicitud. Inténtalo de nuevo.',
				isUser: false
			});

			// Enfocar el input de texto y hacer scroll al fondo del chat
			this.tryFocusInput();
			setTimeout(() => this.scrollToBottom(), 0);
		}
	}

	tryFocusInput(): void {
		if (!this.inputText.disableInput) {
			// Asegúrate de resetear la altura antes de enfocar
			this.inputText.resetHeight();
			this.inputText.focusInput();
		} else {
			// Evitar recursión continua con un límite de intentos
			let attempts = 0;
			const maxAttempts = 5;

			const retryFocus = () => {
				if (attempts < maxAttempts) {
					setTimeout(() => {
						if (!this.inputText.disableInput) {
							this.inputText.resetHeight();
							this.inputText.focusInput();
						} else {
							attempts++;
							retryFocus();
						}
					}, 1000);
				}
			};

			retryFocus();
		}
	}
}
