import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WsAgentService {
	private socket!: WebSocket;
	private subject!: Subject<unknown>;

	public connect(url: string): Subject<unknown> {
		if (!this.subject) {
			this.subject = this.create(url);
		}
		return this.subject;
	}

	private create(url: string): Subject<unknown> {
		this.socket = new WebSocket(url);

		const subject = new Subject<unknown>();

		this.socket.onmessage = (event) => {
			subject.next(event.data);
		};

		this.socket.onclose = () => subject.complete();
		this.socket.onerror = (error) => subject.error(error);

		return subject;
	}

	public sendMessage(message: string) {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			this.socket.send(JSON.stringify(message));
		}
	}

	public close() {
		if (this.socket) {
			this.socket.close();
		}
	}
}
