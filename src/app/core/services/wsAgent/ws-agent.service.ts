import { Injectable, signal } from '@angular/core';
import { WebSocketMessage } from '@core/interfaces/agentws.interface';
import { UserBankia } from '@core/interfaces/user-bankia.interface';
import { UserService } from '@core/services/user/user.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WsAgentService {
	private socket!: WebSocket;
	user = signal<UserBankia | null>(null);
	private messageSubject = new Subject<string>();

	constructor(private userService: UserService) {
		this.user.set(this.userService.getUser());
	}

	// Conectar al WebSocket
	public connect(url: string): void {
		this.socket = new WebSocket(url);

		// Al abrir la conexión
		this.socket.onopen = (event) => {
			console.log('Conectado al WebSocket.', event);
		};

		// Al recibir un mensaje
		this.socket.onmessage = (event) => {
			this.messageSubject.next(event.data);
		};

		// Al ocurrir un error
		this.socket.onerror = (event) => {
			console.error('Error observado en el WebSocket:', event);
		};

		// Al cerrar la conexión
		this.socket.onclose = (event) => {
			console.log('WebSocket cerrado:', event);
		};
	}

	public get messages$(): Observable<string> {
		return this.messageSubject.asObservable();
	}

	public sendMessage(message: string): void {
		if (this.socket.readyState === WebSocket.OPEN) {
			this.sendFormattedMessage(message);
		} else {
			console.error('El WebSocket no está abierto. Estado listo: ' + this.socket.readyState);
		}
	}

	private sendFormattedMessage(message: string): void {
		const webSocketMessage: WebSocketMessage = {
			service: 'chat',
			action: 'sendmessage',
			data: {
				user_id: this.user()?.usuario || '',
				session_id: this.user()?.sessionId || '',
				message: message
			}
		};
		this.socket.send(JSON.stringify(webSocketMessage));
	}

	public closeConnection(): void {
		if (this.socket) {
			this.socket.close(); // Cierra la conexión WebSocket
		}
	}
}
