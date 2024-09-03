import { Injectable } from '@angular/core';
import { AgentResponse } from '@core/interfaces/agent.interface';
import { QuestionRequest } from '@core/interfaces/question.interface';
import { OptionsHttp } from '@core/models/options-http.interface';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
	providedIn: 'root'
})
export class AgentService extends HttpService {
	getResponseAgent(question: QuestionRequest): Observable<AgentResponse> {
		this.addHeader('x-api-key', 'G0auLJ0a0r6hJgBl1h0r85N4xxu4apZ7i39KyAE3');
		const options: OptionsHttp = {
			headers: this.getHeaders(),
			timeout: 9000000
		};
		return this.httpPOST(
			'https://if2ni4x49d.execute-api.us-east-1.amazonaws.com/dev/bedrock-agent',
			question,
			options
		);
	}

	// Método adicional que utiliza async/await
	async getResponseAgentAsync(
		question: QuestionRequest
	): Promise<AgentResponse> {
		this.addHeader('x-api-key', 'G0auLJ0a0r6hJgBl1h0r85N4xxu4apZ7i39KyAE3');
		const options: OptionsHttp = {
			headers: this.getHeaders(),
			timeout: 9000000 // 150 minutos
		};
		try {
			// Convertir Observable a Promise
			const response: AgentResponse = await firstValueFrom(
				this.httpPOST(
					'https://if2ni4x49d.execute-api.us-east-1.amazonaws.com/dev/bedrock-agent',
					question,
					options
				)
			);
			return response;
		} catch (error) {
			// Manejo de errores
			console.error('Error en getResponseAgentAsync:', error);
			throw error;
		}
	}
}
