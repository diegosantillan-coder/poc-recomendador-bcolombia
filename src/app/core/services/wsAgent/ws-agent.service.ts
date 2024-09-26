import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WsAgentService {
	private socket!: WebSocket;
	private messageSubject = new Subject<string>();

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
			console.log('Mensaje recibido:', event.data);
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
		const chunkSize = 80;
		for (let i = 0; i < message.length; i += chunkSize) {
			const chunk = message.slice(i, i + chunkSize);
			const payload = {
				action: 'sendmessage',
				message: chunk
			};
			this.socket.send(JSON.stringify(payload));
		}
	}

	public closeConnection(): void {
		if (this.socket) {
			this.socket.close(); // Cierra la conexión WebSocket
		}
	}
}
