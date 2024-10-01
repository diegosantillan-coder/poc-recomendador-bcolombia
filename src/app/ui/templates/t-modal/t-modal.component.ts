import { NgClass } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	OnDestroy,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { QuestionRequest, Request } from '@core/interfaces/question.interface';
import { UserBankia } from '@core/interfaces/user-bankia.interface';
import { AgentService } from '@core/services/agent/agent.service';
import { QuestionService } from '@core/services/question/question.service';
import { TextService } from '@core/services/text/text.service';
import { UserService } from '@core/services/user/user.service';
import { WsAgentService } from '@core/services/wsAgent/ws-agent.service';
import { ACustomInputTextComponent } from '@ui/atoms/a-custom-input-text/a-custom-input-text.component';
import { AtomsModule } from '@ui/atoms/atoms.module';
import { Observable } from 'rxjs';
import { ACardChatComponent } from '../../atoms/a-card-chat/a-card-chat.component';

@Component({
	selector: 't-modal',
	standalone: true,
	imports: [AtomsModule, NgClass, ACardChatComponent],
	templateUrl: './t-modal.component.html',
	styleUrl: './t-modal.component.scss'
})
export class TModalComponent implements OnInit, AfterViewInit, OnDestroy {
	private readonly wsAgentService = inject(WsAgentService);
	private readonly agentService = inject(AgentService);
	private readonly userService = inject(UserService);
	private readonly questionService = inject(QuestionService);
	private readonly formatTextService = inject(TextService);

	user: UserBankia = this.userService.getUser();
	messages$!: Observable<string>; // Observable para los mensajes
	connection = this.wsAgentService.connect(
		'wss://6wojr7icoe.execute-api.us-east-1.amazonaws.com/dev/'
	);

	ngOnDestroy(): void {
		this.questionService.setUser({ usuario: '', sessionId: '', password: '' });
		this.wsAgentService.closeConnection();
	}

	ngOnInit(): void {
		this.defaultQuestion = this.questionService.getDefaultQuestions();
		this.listenerWebSocket();
	}

	chats: { text: string; isUser: boolean }[] = [];

	valueInput = '';
	isInputEmpty = false;
	isDisableInput = false;
	isTyping = false; // Bandera para indicar si está "escribiendo"
	welcome = true;
	defaultQuestion: Request[] = [];

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
			this.welcome = false;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
			this.sendMessageWSocket(this.valueInput);
		}
	}

	sendDefaultQuestion(question: Request): void {
		if (question.prompt) {
			this.welcome = false;
			this.valueInput = question.prompt;
			this.chats.push({
				text: this.valueInput,
				isUser: true
			});
			this.sendMessageWSocket(this.valueInput);
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
			this.welcome = false;
		}
		this.inputText.clearInputFrom();
		this.sendMessageWSocket(this.valueInput);
	}

	ngAfterViewInit(): void {
		this.scrollToBottom();
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

	sendMessageWSocket(message: string): void {
		this.isInputEmpty = false;
		this.isDisableInput = true;
		this.isTyping = true;
		this.wsAgentService.sendMessage(message);
	}

	tryFocusInput(): void {
		if (!this.inputText.disableInput) {
			this.inputText.resetHeight();
			this.inputText.focusInput();
		} else {
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

	private handleWebSocketMessage(
		message: string,
		timeoutDuration: number,
		inactivityTimeout: any
	): void {
		this.reiniciarTemporizador(timeoutDuration, inactivityTimeout);
		this.updateChatList();
		this.updateLastChatMessage(message);
		setTimeout(() => this.scrollToBottom(), 0);
	}

	private updateChatList(): void {
		if (this.chats.length === 0 || this.chats[this.chats.length - 1].isUser) {
			this.chats.push({ isUser: false, text: '' });
			this.isTyping = false;
		}
	}

	private updateLastChatMessage(message: string): void {
		const formattedMessage = this.formatMessageAsList(message);
		this.chats[this.chats.length - 1].text = formattedMessage;
	}

	listenerWebSocket(): void {
		console.log('Conexión WebSocket:', this.connection);

		const timeoutDuration = 100;
		let inactivityTimeout: any;

		this.wsAgentService.messages$.subscribe({
			next: (message: string) =>
				this.handleWebSocketMessage(message, timeoutDuration, inactivityTimeout),
			error: (error) => this.handleWebSocketError(error)
		});

		this.reiniciarTemporizador(timeoutDuration, inactivityTimeout);
	}

	private finalizarPorInactividad(): void {
		console.log('No se recibieron mensajes en el tiempo establecido. Finalizando.');
		this.habilitarBotones();
	}

	private reiniciarTemporizador(timeoutDuration: number, inactivityTimeout: any): void {
		if (inactivityTimeout) {
			clearTimeout(inactivityTimeout);
		}
		inactivityTimeout = setTimeout(() => this.finalizarPorInactividad(), timeoutDuration);
	}

	private handleWebSocketError(error: any): void {
		console.error('Error WebSocket:', error);
	}

	habilitarBotones(): void {
		this.isDisableInput = false;
		this.tryFocusInput();
		this.isInputEmpty = true;
	}

	private formatMessageAsList(message: string): string {
		const lines = message.split('\n').filter((line) => line.trim() !== '');
		const listItems = lines.map((line) => `<li>${line}</li>`).join('');
		return `<ul>${listItems}</ul>`; // Encerrar en un <ul>
	}

	//Agente virtual depreciado por el uso de WebSocket
	async askingTheAgent(request: QuestionRequest): Promise<void> {
		this.isInputEmpty = false;
		this.isDisableInput = true;
		this.isTyping = true;

		try {
			const response = await this.agentService.getResponseAgentAsync(request);
			const answer = this.formatTextService.formatText(response.agent_answer);
			const answerLinkFormat = this.formatTextService.generateLinkHtml(answer);
			if (response.agent_answer) {
				this.chats.push({
					text: answerLinkFormat,
					isUser: false
				});
			}
			this.isDisableInput = false;
			this.isTyping = false;
			this.tryFocusInput();
			setTimeout(() => this.scrollToBottom(), 0);
		} catch (error) {
			console.error('Error al obtener la respuesta del agente:', error);

			this.isDisableInput = false;
			this.isTyping = false;
			this.chats.push({
				text: 'Hubo un error al procesar la solicitud. Inténtalo de nuevo.',
				isUser: false
			});
			this.tryFocusInput();
			setTimeout(() => this.scrollToBottom(), 0);
		}
	}
}
